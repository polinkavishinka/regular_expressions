export default class Validator { 
    constructor(nickname) { 
    this.name = nickname; 
    } 

    validateUserName() { 
        const rule1 =  /[^\w-]/.test(this.name);
        const rule2 = /^[^\d_-][\w-]+[^\d_-]$/.test(this.name); 
        const rule3 = /\d{4,}/.test(this.name); 

        if (rule1) { 
            throw new Error( 
            'ОШИБКА! Разрешены: только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)', 
            ); 
        } 
        if (!rule2) { 
            throw new Error( 
            'ОШИБКА! Имя пользоватебя  начинаеться и заканчивеаться цифрами, символами подчёркивания или тире.', 
            ); 
    } 
        if (rule3) { 
            throw new Error('ОШИБКА! Имя содержит подряд более трёх цифр!'); 
    } 
    return this.name; 
    } 
}