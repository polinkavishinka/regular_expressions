import Validator from '../regular'; 

test('Проверка имени пользователя. Имя корректное', () => { 
    const nickName = 'Alex-12_D-4-M'; 
    const validateNickName = new Validator(nickName); 
    expect(validateNickName.validateUserName()).toBe(nickName); 
}); 

test('Проверка имени пользователя. Имя содержит не разрешенные символы', () => { 
    expect(() => { 
        const nickName = 'Alex@-12_D-4-M'; 
        const validateNickName = new Validator(nickName); 
        validateNickName.validateUserName(); 
    }).toThrowError( 
    new Error( 
        'ОШИБКА! Разрешены: только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)', 
    ), 
    ); 
}); 

test('Проверка имени пользователя. Имя содержит цифру в начале', () => { 
    expect(() => { 
        const nickName = '1Alex-12_D-4-M'; 
        const validateNickName = new Validator(nickName); 
        validateNickName.validateUserName(); 
    }).toThrowError( 
    new Error( 
        'ОШИБКА! Имя пользоватебя  начинаеться и заканчивеаться цифрами, символами подчёркивания или тире.', 
    ), 
    ); 
}); 

test('Проверка имени пользователя. Имя содержит цифру в конце', () => { 
    expect(() => { 
        const nickName = 'Alex-12_D-4-M_1'; 
        const validateNickName = new Validator(nickName); 
        validateNickName.validateUserName(); 
    }).toThrowError( 
    new Error( 
        'ОШИБКА! Имя пользоватебя  начинаеться и заканчивеаться цифрами, символами подчёркивания или тире.', 
    ), 
    ); 
}); 

test('Проверка имени пользователя. Имя содержит тире в начале', () => { 
    expect(() => { 
        const nickName = '-Alex-12_D-4-M'; 
        const validateNickName = new Validator(nickName); 
        validateNickName.validateUserName(); 
    }).toThrowError( 
    new Error( 
        'ОШИБКА! Имя пользоватебя  начинаеться и заканчивеаться цифрами, символами подчёркивания или тире.', 
    ), 
    ); 
}); 

test('Проверка имени пользователя. Имя содержит знак подчеркивания в конце', () => { 
    expect(() => { 
        const nickName = 'Alex-12_D-4-M_'; 
        const validateNickName = new Validator(nickName); 
        validateNickName.validateUserName(); 
    }).toThrowError( 
    new Error( 
        'ОШИБКА! Имя пользоватебя  начинаеться и заканчивеаться цифрами, символами подчёркивания или тире.', 
    ), 
    ); 
}); 

test('Проверка имени пользователя. Имя содержит более 3 цифр подряд', () => { 
    expect(() => { 
        const nickName = 'Alex-12342342_D-4-M'; 
        const validateNickName = new Validator(nickName); 
        validateNickName.validateUserName(); 
    }).toThrowError( 
    new Error( 
        'ОШИБКА! Имя содержит подряд более трёх цифр.', 
    ), 
    ); 
});