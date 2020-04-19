const getFullWeekName = (dia: string) => {
    switch (dia) {
        case "seg":
            return "Segunda-Feira";
        case "ter":
            return "Terça-Feira";
        case "qua":
            return "Quarta-Feira";
        case "qui":
            return "Quinta-Feira";
        case "sex":
            return "Sexta-Feira";
        case "sab":
            return "Sábado";
        case "dom":
            return "Domingo";
        default:
            return "undefined"
    }
}
export default getFullWeekName;