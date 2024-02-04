const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (error, user) => {
            if (error)
                res.status(403).json({ message: "Le token n'est pas valide!" });

            req.user = user;
            next();
        });
    } else {
        return res.status(401).json({
            message: "Vous n'êtes pas authentifié.",
        });
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json({
                message: "Tu n'es pas autorisé à faire ça.",
            });
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json({
                message: "Tu n'es pas autorisé à faire ça.",
            });
        }
    });
};

module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
};
