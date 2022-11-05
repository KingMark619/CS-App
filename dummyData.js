import image1 from './assets/memojis/image1.png'
import image2 from './assets/memojis/image2.jpg'
import image3 from './assets/memojis/image3.jpg'
import image4 from './assets/memojis/image4.jpg'

export {image1, image2, image3, image4}
// Doctor list 
export const DoctorList = [
    {
        id:1,
        name:'Chris',
        specialty: 'Pediatry',
        emoji: '👼🏽',
        profile:'https://placeimg.com/140/140/any',
        available: false,
        online: true,
        address:'303 ave de leglise',
        phone: '123756758',
        email: 'chris@hospital.com',

    },
    {
        id:2,
        name:'John',
        specialty: 'Surgery',
        emoji: '🔪',
        profile:'https://placeimg.com/140/140/any',
        available: false,
        online: false,
        address:'495 church Ave',
        phone: '36777-8737',
        email: 'john@hospital.com',

    },
    {
        id:3,
        name:'Mary',
        specialty: 'Cardiology',
        emoji: '🫀',
        profile:'https://placeimg.com/140/140/any',
        available: false,
        online: false,
        address:'376 Xiong Ave',
        phone: '2384-84-884',
        email: 'mary@hospital.com',

    },{
        id:4,
        name:'Jane',
        specialty: 'Generalist',
        emoji: '👩‍⚕️',
        profile:'https://placeimg.com/140/140/any',
        available: false,
        online: true,
        address:'48 St Ave',
        phone: '2347-9424-42',
        email: 'jane@hospital.com',

    },
    {
        id:5,
        name:'Johnny Boy',
        specialty: 'Pediatry',
        emoji: '👶',
        profile:'https://placeimg.com/140/140/any',
        available: false,
        online: true,
        address:'484 St Ave',
        phone: '2321-123-234',
        email: 'johnny@hospital.com',

    }
]

export const Messages = [
    {
        _id: 1,
        user:{
            _id: 1,
            name: 'John',
            avatar:'https://placeimg.com/140/140/any'
        },
        text: ' 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        createdAt: new Date(),
    },
    {
        _id: 2,
        user:{
            _id: 2,
            name: 'Wiz',
            avatar:'https://placeimg.com/140/140/any'
        },
        text: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        createdAt: new Date(),
    },
    {
        _id: 3,
        user:{
            _id: 3,
            name: 'Kely',
            avatar:'https://placeimg.com/140/140/any'
        },
        text: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        createdAt: new Date(),
    },
    {
        _id: 4,
        user:{
            _id: 4,
            name: 'Zhu',
            avatar:'https://placeimg.com/140/140/any'
        },
        text: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        createdAt: new Date(),
    },
    {
        _id: 5,
        user:{
            _id: 1,
            name: 'Mom',
            avatar:'https://placeimg.com/140/140/any'
        },
        text: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        createdAt: new Date(),
    }
]

export const Article = [
    // {
    //     title:'Covid 19',
    //     subtitle:'News about covid 19',
    //     photos:[],
    //     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
    // {
    //     title:'HPV',
    //     subtitle:'Learn how to deal with HPV',
    //     photos:[],
    //     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
    // {
    //     title:'Menstrual cycle',
    //     subtitle:'News about covid 19',
    //     photos:[],
    //     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
    {
        id:0,
        name:'general',
        color : '#afe7f2',
        icon: image1
    },
    {
        id:1,
        name:'pediatry',
        color:'#aaedbc',
        icon: image2
    },
    {
        id:2,
        name:'pregnancy',
        color:'#ede1aa',
        icon: image3
    },
    {
        id:3,
        name:'surgery',
        color:'#dbaaed',
        icon: image4 
    }  
    
]

export const Specialities = [
    {
        id:0,
        name:'general',
        color : '#afe7f2',
        icon: image1
    },
    {
        id:1,
        name:'pediatry',
        color:'#aaedbc',
        icon: image2
    },
    {
        id:2,
        name:'pregnancy',
        color:'#ede1aa',
        icon: image3
    },
    {
        id:3,
        name:'surgery',
        color:'#dbaaed',
        icon: image4 
    }    
]
const Appointment = [
    {
        userID:0,
        date: new Date().getDate,
        time: new Date().getHours,
        doctorId: 0,
    },
    {
        userID:0,
        date: new Date().getDate,
        time: new Date().getHours,
        doctorId: 1,
    },
    {
        userID:0,
        date: new Date().getDate,
        time: new Date().getHours,
        doctorId: 2,
    },
    {
        userID:0,
        date: new Date().getDate,
        time: new Date().getHours,
        doctorId: 3,
    }
]