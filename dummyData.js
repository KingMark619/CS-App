import image1 from './assets/memojis/image1.png'
import image2 from './assets/memojis/image2.jpg'
import image3 from './assets/memojis/image3.jpg'
import image4 from './assets/memojis/image4.jpg'

export {image1, image2, image3, image4}
// Doctor list 
export const DoctorList = [
    {
        id:3,
        name:'Mary Madelene',
        specialty: 'Cardiology',
        emoji: '🫀',
        profile:'https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0=',
        available: false,
        online: false,
        address:'376 Xiong Ave',
        phone: '2384-84-884',
        email: 'mary@hospital.com',

    },{
        id:4,
        name:'Steven K.',
        specialty: 'Generalist',
        emoji: '👩‍⚕️',
        profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUiXFuarEJUMRXt77SKGrmaTpN-dUQG7lj2T4II1Eqmb9pehb9vn9ZL0Ubz7BklGbfS8&usqp=CAU',
        available: false,
        online: true,
        address:'48 St Ave',
        phone: '2347-9424-42',
        email: 'jane@hospital.com',

    },
    {
        id:5,
        name:'Naomi Campbell',
        specialty: 'Pediatry',
        emoji: '👶',
        profile:'https://www.careersportal.co.za/sites/default/files/styles/amp_1200x675_16_9/public/images/Terrique%20Faro/doctor.jpg?itok=82h2RXdD',
        available: false,
        online: true,
        address:'484 St Ave',
        phone: '2321-123-234',
        email: 'johnny@hospital.com',

    },
    {
        id:1,
        name:'Chris P.',
        specialty: 'Pediatry',
        emoji: '👼🏽',
        profile:'https://www.pinnaclecare.com/wp-content/uploads/2017/12/bigstock-African-young-doctor-portrait-28825394.jpg',
        available: false,
        online: true,
        address:'303 ave de leglise',
        phone: '123756758',
        email: 'chris@hospital.com',

    },
    {
        id:2,
        name:'John Stockton',
        specialty: 'Surgery',
        emoji: '🔪',
        profile:'https://www.collinsdictionary.com/images/full/doctor_117169531.jpg',
        available: false,
        online: false,
        address:'495 church Ave',
        phone: '36777-8737',
        email: 'john@hospital.com',

    },
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
    {
        id:0,
        name:'General',
        color : '#24478a',
        amount: 30,
        emoji:'🏥',
        icon: image1
    },
   
    
    {
        id:2,
        name:'Pregnancy',
        color:'#f4b463',
        amount: 40,
        emoji:'🤰🏽',
        icon: image3
    },
    {
        id:3,
        name:'Cardiology',
        color:'#ee7a76',
        amount: 35,
        emoji:'🫀',
        icon: image4 
    },
    {
        id:4,
        name:'Dentistry',
        color:'#63d8a9',
        amount: 45,
        emoji:'🦷',
        icon: image2
    },
    {
        id:1,
        name:'Pediatry',
        color:'#d034eb',
        amount: 45,
        emoji:'🧒🏾',
        icon: image2
    },
    
]

export const Specialities = [
    {
        id:0,
        name:'General',
        color : '#afe7f2',
        icon: image1
    },
    {
        id:1,
        name:'Pediatry',
        color:'#aaedbc',
        icon: image2
    },
    {
        id:2,
        name:'Pregnancy',
        color:'#ede1aa',
        icon: image3
    },
    {
        id:3,
        name:'Surgery',
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