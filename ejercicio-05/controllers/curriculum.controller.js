import curriculum from "../data/curriculum.js";

export function showCurriculum(req, res) {
    res.render("curriculum", {
        title: `Currículum de ${curriculum.name}`,
        curriculum,
        errors: [],
        contact: { name: "", email: "", message: "" },
    });
}

export function receiveContact(req, res) {
    const contact = {};

    for (const field of ["name", "email", "message"]) {
        const value = req.body?.[field];
        contact[field] = typeof value === "string" ? value.trim() : "";
    }

    const errors = [];

    if (!contact.name || contact.name.length > 100) {
        errors.push("Escribe un nombre de entre 1 y 100 caracteres.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email) || contact.email.length > 254) {
        errors.push("Escribe un correo electrónico válido de hasta 254 caracteres.");
    }

    if (!contact.message || contact.message.length > 2000) {
        errors.push("Escribe un mensaje de entre 1 y 2000 caracteres.");
    }

    if (errors.length > 0) {
        return res.status(400).render("curriculum", {
            title: `Currículum de ${curriculum.name}`,
            curriculum,
            errors,
            contact,
        });
    }

    res.render("thanks", { title: "Contacto recibido", contact });
}
