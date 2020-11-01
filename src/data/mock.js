const cardsData = [
    {
        title: 'Marina In',
        type: 'apartments', //1-аппартаменты; 2-отель
        reviews: 3,
        location: {
            title: 'Албания',
            value: 'albania'
        },
        description: 'Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с терассой и сауна. Из номеров открывается вид на море.',
        price: 4600,
        rating: 2,
        period: 'Цена за 1 ночь',
        status: 1 // 1 = забронировано; 2 = не забронированно
    },
    {
        title: 'Mondrian Suites',
        type: 'apartments',
        reviews: 4,
        location: {
            title: 'Азербайджан',
            value: 'azerbaijan'
        },
        description: 'Этот 2-звездочный отель расположен в центре города.',
        price: 2600,
        rating: 3,
        period: 'Цена за 1 ночь',
        status: 2
    },
    {
        title: 'Sunny Appartmants',
        type: 'hotel',
        reviews: 11,
        location: {
            title: 'Албания',
            value: 'albania'
        },
        description: 'Все номера и апартаменты оборудованы кондиционером и телевизором с плоским экраном. Также в расположении гостей тостер и чайник.',
        price: 5000,
        rating: 3,
        period: 'Цена за 1 ночь',
        status: 2
    },
    {
        title: 'Funny House',
        type: 'apartments',
        reviews: 21,
        location: {
            title: 'Украина',
            value: 'ukraine'
        },
        description: 'Все номера и апартаменты оборудованы кондиционером и телевизором с плоским экраном. Также в расположении гостей тостер и чайник.',
        price: 20000,
        rating: 5,
        period: 'Цена за 1 ночь',
        status: 2
    },
    {
        title: 'Crazy House',
        type: 'hotel',
        reviews: 37,
        location: {
            title: 'Россия',
            value: 'russia'
        },
        description: 'Все номера и апартаменты оборудованы кондиционером и телевизором с плоским экраном. Также в расположении гостей тостер и чайник.',
        price: 25000,
        rating: 4,
        period: 'Цена за 1 ночь',
        status: 2
    },
    {
        title: 'Xperience Golden Sandy Beach',
        type: 'hotel',
        reviews: 37,
        location: {
            title: 'Египет',
            value: 'egypt'
        },
        description: 'Отель Xperience Golden Sandy Beach с садом и частным пляжем расположен в Шарм-эль-Шейхе, в районе Шарм-эль-Майя.',
        price: 15000,
        rating: 4,
        period: 'Цена за 1 ночь',
        status: 2
    },
    {
        title: 'Coral Sea Aqua Club Resort',
        type: 'hotel',
        reviews: 87,
        location: {
            title: 'Франция',
            value: 'france'
        },
        description: 'Курортный отель Coral Sea Aqua Club расположен в Шарм-эль-Шейхе. К услугам гостей фитнес-центр, сад и терраса. Поблизости находятся такие достопримечательности, как Международный конгресс-центр сети Jolie Ville Hotels и Коптская церковь. На территории отеля работает бар.',
        price: 45000,
        rating: 4,
        period: 'Цена за 1 ночь',
        status: 2
    },
    {
        title: 'Aqua Club Resort',
        type: 'hotel',
        reviews: 16,
        location: {
            title: 'Египет',
            value: 'egypt'
        },
        description: 'Номера оснащены телевизором с плоским экраном и спутниковыми каналами. Среди прочих удобств чайник. Из некоторых номеров курортного отеля Coral Sea Aqua Club открывается вид на бассейн. В собственной ванной комнате установлена ванна.',
        price: 5000,
        rating: 5,
        period: 'Цена за 1 ночь',
        status: 2
    },
    {
        title: 'Arabesque Sharm Resort',
        type: 'apartments',
        reviews: 116,
        location: {
            title: 'Египет',
            value: 'egypt'
        },
        description: 'Курортный спа-отель Arabesque Sharm расположен в Шарм-эль-Шейхе, в 1,4 км от пляжа Рас Ум Эль Сид. ',
        price: 35000,
        rating: 5,
        period: 'Цена за 1 ночь',
        status: 2
    },
    {
        title: 'Old Vic Sharm Resort',
        type: 'apartments',
        reviews: 317,
        location: {
            title: 'Россия',
            value: 'russia'
        },
        description: 'В курортном отеле Steigenberger Alcazar предлагаются 610 номеров. Улучшенные номера и семейные номера Делюкс находятся прямо у пляжа. Для размещения больших групп предусмотрены виллы и полулюксы.',
        price: 7000,
        rating: 3,
        period: 'Цена за 1 ночь',
        status: 1
    },
    {
        title: 'Steigenberger Alcazar',
        type: 'hotel',
        reviews: 417,
        location: {
            title: 'Италия',
            value: 'italy'
        },
        description: 'Новейший в районе Набк курортный отель Steigenberger Alcazar расположен в 15 минутах от международного аэропорта Шарм-эш-Шейха. К услугам гостей этого 5-звездочного курортного отеля',
        price: 37000,
        rating: 3,
        period: 'Цена за 1 ночь',
        status: 1
    },

    {
        title: 'Alcazar',
        type: 'apartments',
        reviews: 221,
        location: {
            title: 'Украина',
            value: 'ukraine'
        },
        description: 'Курортный отель Steigenberger Alcazar находится в 55 км от национального парка Рас-Мохаммед и в 400 метрах от центра района Набк-Бей. Расстояние до международного аэропорта Шарм-эш-Шейха составляет 13 км.',
        price: 2000,
        rating: 4,
        period: 'Цена за 1 ночь',
        status: 1
    },
    {
        title: 'Steigenberger',
        type: 'hotel',
        reviews: 37,
        location: {
            title: 'Россия',
            value: 'russia'
        },
        description: 'В курортном отеле Steigenberger Alcazar предлагаются 610 номеров. Улучшенные номера и семейные номера Делюкс находятся прямо у пляжа. Для размещения больших групп предусмотрены виллы и полулюксы.',
        price: 125000,
        rating: 2,
        period: 'Цена за 1 ночь',
        status: 2
    },
    {
        title: 'Sandy Beach',
        type: 'hotel',
        reviews: 37,
        location: {
            title: 'Египет',
            value: 'egypt'
        },
        description: 'Отель Xperience Golden Sandy Beach с садом и частным пляжем расположен в Шарм-эль-Шейхе, в районе Шарм-эль-Майя.',
        price: 115000,
        rating: 5,
        period: 'Цена за 1 ночь',
        status: 2
    },
];


export {
    cardsData,
}