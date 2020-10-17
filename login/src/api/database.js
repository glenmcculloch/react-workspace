const USER_TYPE = [ 'TYPE_USER', 'TYPE_ADMIN' ];

export const database = {
    users: [
        {
            email: 'gkmcculloch@email.com',
            password: '123456',
            first_name: 'Glen',
            last_name: 'McCulloch',
            user_type: USER_TYPE[1]
        },
        {
            email: 'hbarlow@email.com',
            password: '123456',
            first_name: 'Harrison',
            last_name: 'Barlow',
            user_type: USER_TYPE[0]
        },
        {
            email: 'pygonia@email.com',
            password: '123456',
            first_name: 'Paolo',
            last_name: 'Ygonia',
            user_type: USER_TYPE[0]
        },
        {
            email: 'ebrown@email.com',
            password: '123456',
            first_name: 'Eilish',
            last_name: 'Brown',
            user_type: USER_TYPE[0]
        },
        {
            email: 'itriscari@email.com',
            password: '123456',
            first_name: 'Isabella',
            last_name: 'Triscari',
            user_type: USER_TYPE[0]
        }
    ]
};