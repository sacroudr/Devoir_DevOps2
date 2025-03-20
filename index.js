exports.handler = async () => {
    const now = new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' });
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello World ! Ici Groupe 6, à ${now}` })
    };
};
