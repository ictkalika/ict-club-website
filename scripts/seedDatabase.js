const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// Board Members Data
const boardMembers = [{
        type: "board",
        name: "Siddhant Panthi",
        position: "President",
        image: "/images/siddhant-panthi.jpg",
        bio: "Leading the club with passion for technology and innovation.",
        skills: ["Leadership", "Web Development", "Project Management", "Graphics Designing"],
        social: {
            linkedin: "https://linkedin.com/in/siddhantpanthi",
            github: "https://github.com/siddhantpanthi",
            instagram: "https://instagram.com/siddu.psd"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "SANJOG PANDEY",
        position: "Vice President",
        image: "/images/sanjog-pandey.jpg",
        bio: "Coordinating events and fostering collaboration among members.",
        skills: ["Event Management", "UI/UX Design", "Team Building"],
        social: {
            linkedin: "https://linkedin.com/in/sangogpandey",
            github: "https://github.com/sangogpandey",
            instagram: "https://instagram.com/sangogpandey"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "RAMIT NEUPANE",
        position: "Secretary",
        image: "https://storage.tally.so/private/FD5BA672-63AF-4B2C-A887-F2AAE4F8DB36.jpeg?id=rELzz2&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJFTHp6MiIsImZvcm1JZCI6Ind6UkVPRSIsImlhdCI6MTc0OTE3MDkzNX0.q1KSfNrGo0X7oU61qISdLC44yDzi6CykZBlZSb2RWfE&signature=c3d5bcef9ab99017807025d6188ef37b6abb20f7a553cebbdeaff8d2e8e8cb74",
        bio: "Documentation for the club.",
        skills: ["Documentation", "Communication", "Organization"],
        social: {
            linkedin: "https://linkedin.com/in/ramatneupane",
            github: "https://github.com/ramatneupane",
            website: "https://ramatneupane.dev"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "SHASANK SHRESTHA",
        position: "Treasurer",
        image: "/images/shasank-shrestha.jpg",
        bio: "Managing club finances and resource allocation.",
        skills: ["Financial Management", "Planning", "Analytics"],
        social: {
            linkedin: "https://linkedin.com/in/shasankshrestha",
            email: "shasankshrestha59@gmail.com",
            github: "https://github.com/shasank00"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "NAYAN ACHARYA",
        position: "IT Head",
        image: "/images/nayan-acharya.jpg",
        bio: "Overseeing technical projects and infrastructure.",
        skills: ["System Administration", "DevOps", "Technical Leadership"],
        social: {
            linkedin: "https://linkedin.com/in/nayan135",
            twitter: "https://twitter.com/nooneknows135",
            email: "nayan@ypstem.org"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "NARAYAN BHUSAL",
        position: "IT Officer",
        image: "/images/narayan-bhusal.jpg",
        bio: "Supporting technical initiatives and member development.",
        skills: ["Web Development", "Mentoring", "Project Coordination"],
        social: {
            linkedin: "https://linkedin.com/in/naranbhusal02",
            twitter: "https://twitter.com/naranbhusal02",
            email: "narayan@ypstem.org"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "NISHAN REGMI",
        position: "Media",
        image: "https://storage.tally.so/private/inbound5447591931717511682.jpg?id=E0DyjB&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkUwRHlqQiIsImZvcm1JZCI6Ind6UkVPRSIsImlhdCI6MTc0OTEyODA3NX0.2CTpAvwu_RXW9bSYkVgRcAbtM_YwzDSAoVn7n6u7FDw&signature=0f81f6034d38c3925c078457f14b42bf6c600c75b98d11e0b9eebf44a279df37",
        bio: "Managing club media presence and communications.",
        skills: ["Content Creation", "Social Media", "Photography"],
        social: {
            linkedin: "https://linkedin.com/in/nishanregmi",
            email: "nishanregmi@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Bishnu Adhikari",
        position: "Head of Executive",
        image: "/images/bishnu-adhikari.jpg",
        bio: "Contributing to strategic planning and club operations.",
        skills: ["Strategy", "Operations", "Member Engagement"],
        social: {
            linkedin: "https://www.linkedin.com/in/bishnu-adhikari-8bb6242a5/",
            email: "yamadeath0@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Sweta lamsal",
        position: "Joint Secretary",
        image: "/images/sweta-lamsal.jpg",
        bio: "Contributing to strategic planning and club operations.",
        skills: ["Communication", "Organization", "Event Planning"],
        social: {
            facebook: "https://www.facebook.com/swe.ta.119000",
            email: "swetadonna@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Aaditya Khanal",
        position: "Leader Of 11",
        image: "/images/aaditya-khanal.jpg",
        bio: "Engaging team with various events throughout the club.",
        skills: ["Leadership", "Communication", "Management"],
        social: {
            facebook: "https://www.facebook.com/aaditya.khanal.7999",
            email: "khanalaaditya27@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Himanshu Sapkota",
        position: "Leader Of 10",
        image: "/images/himanshu-sapkota.jpg",
        bio: "Engaging team with various events throughout the club.",
        skills: ["Leadership", "Communication", "Management"],
        social: {
            linkedin: "https://www.linkedin.com/in/himanshu-sapkota-3b5488339?originalSubdomain=np",
            email: "himanshuspkt@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Samriddha poudel",
        position: "Leader Of 9",
        image: "/images/samriddha-poudel.jpg",
        bio: "Engaging team with various events throughout the club.",
        skills: ["Leadership", "Communication", "Management"],
        social: {
            facebook: "https://www.facebook.com/samriddha.poudel.869291",
            email: "poudelsamriddha46@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "PRAZWAL ROKA",
        position: "Executive Member",
        image: "/images/prazwal-roka.jpg",
        bio: "Contributing to strategic planning and club operations.",
        skills: ["Strategy", "Operations", "Engagement"],
        social: {
            linkedin: "https://linkedin.com/in/prazwalroka",
            email: "prazwalroka@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Amit Pandey",
        position: "Executive Member",
        image: "/images/amit-pandey.jpg",
        bio: "Contributing to strategic planning and club operations.",
        skills: ["Strategy", "Operations", "Engagement"],
        social: {
            facebook: "https://www.facebook.com/amit.pandey.922255",
            email: "pandeyamit2064@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Raunak Acharya",
        position: "Executive Member",
        image: "/images/raunak-acharya.jpg",
        bio: "Contributing to strategic planning and club operations",
        skills: ["Strategy", "Operations", "Engagement"],
        social: {
            facebook: "https://www.facebook.com/share/18xxwiHzee/",
            email: "raunakacharya0@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Aman Pokharel",
        position: "Executive Member",
        image: "/images/aman-pokharel.jpg",
        bio: "Contributing to strategic planning and club operations",
        skills: ["Strategy", "Operations", "Engagement"],
        social: {
            linkedin: "https://www.linkedin.com/in/aman-pokharel-59b146287/",
            email: "amanpokharel69@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Nischal Darnal",
        position: "Executive Member",
        image: "/images/nischal-darnal.jpg",
        bio: "Contributing to strategic planning and club operations",
        skills: ["Strategy", "Operations", "Engagement"],
        social: {
            facebook: "https://www.facebook.com/share/1LeiXMA3Zb/",
            email: "nischaldarnal69@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Anushka Pokhrel",
        position: "Executive Member",
        image: "/images/anushka-pokhrel.jpg",
        bio: "Contributing to strategic planning and club operations",
        skills: ["Strategy", "Operations", "Engagement"],
        social: {
            facebook: "https://www.facebook.com/anushka.pokhrel.871838/",
            email: "shovasasa0@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Rabin Chudali",
        position: "Executive Member",
        image: "/images/rabin-chudali.jpg",
        bio: "Contributing to strategic planning and club operations",
        skills: ["Strategy", "Operations", "Engagement"],
        social: {
            linkedin: "https://www.linkedin.com/in/rabin-chudali-9600b934b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            email: "rabinchudali07@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Girija Karki",
        position: "Executive Member",
        image: "/images/girija-karki.jpg",
        bio: "Contributing to strategic planning and club operations",
        skills: ["Strategy", "Operations", "Engagement"],
        social: {
            instagram: "https://www.instagram.com/_sanjokkarki?igsh=MXhmbmQxZno3eWFjaA==",
            email: "karkisanjok06@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Sumit Kawar Magar",
        position: "Executive Member",
        image: "/images/sumit-kawar-magar.jpg",
        bio: "Contributing to strategic planning and club operations",
        skills: ["Strategy", "Operations", "Engagement"],
        social: {
            instagram: "https://www.instagram.com/aridorikichi/profilecard/?igsh=cWtwbjBreGNhZHE0",
            email: "aridorikichi@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Anshu Aryal",
        position: "Executive Member",
        image: "/images/anshu-aryal.jpg",
        bio: "Contributing to strategic planning and club operations",
        skills: ["Strategy", "Operations", "Engagement"],
        social: {
            instagram: "https://www.instagram.com/anshuaryal15?igsh=MWgwZnpkNnR3dWF1cw==",
            email: "aryalanshu64@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "board",
        name: "Susant Gautam",
        position: "Executive Member",
        image: "/images/susant-gautam.jpg",
        bio: "Contributing to strategic planning and club operations",
        skills: ["Strategy", "Operations", "Engagement"],
        social: {
            linkedin: "https://www.linkedin.com/in/sushant-gautam-705144314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            email: "sushantgautam854@gmail.com"
        },
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

// Regular Members Data
const members = [
    {
        type: "member",
        name: "Abhi Tiwari",
        position: "MEMBER",
        grade: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Khusi Nisa Banu",
        position: "MEMBER",
        grade: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Rohit Kumar teli",
        position: "MEMBER",
        grade: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Roshani Bhattarai",
        position: "MEMBER",
        grade: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Abhisek Panthi",
        position: "MEMBER",
        grade: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
   
   
    {
        type: "member",
        name: "Jenny thapa",
        position: "MEMBER",
        grade: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    
    {
        type: "member",
        name: "Aarakshya Khanal",
        position: "MEMBER",
        grade: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Utkarsh Shukla",
        position: "MEMBER",
        grade: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    
    
    {
        type: "member",
        name: "Lija Thapa Magar",
        position: "MEMBER",
        grade: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Aakriti thapa",
        position: "MEMBER",
        grade: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Arun Thakur",
        position: "MEMBER",
        grade: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Sushant Barma",
        position: "MEMBER",
        grade: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Prasoon Kandel",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Prasum Shrestha",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Dilsan Basnet",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Pratik Chalise",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Basudeb Pandey",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Giniz Gyawali",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Sakshyam gautam",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Kapil Bahadur Chhetri",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Siddhant poudel",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Utsab Pandey",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Bibek pandey",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Sushan Rayamajhi",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Amrit Poudel",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Ayam Paudel",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Abhishek Subedi",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "samip bhandari",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Aayush budhathoki",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Dipak Kc",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Khuman Adhikari",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Arpan Poudel.",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Aaditya bashyal",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Spandan Baral BK",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Pratik Adhikari",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Sijan Poudel",
        position: "MEMBER",
        grade: 9,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Shisir Dhakal",
        position: "MEMBER",
        grade: 12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Aayush Kunwar Chhetri",
        position: "MEMBER",
        grade: 12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Ravi Tharu",
        position: "MEMBER",
        grade: 12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Kamal Prasad Bhandari",
        position: "MEMBER",
        grade: 12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Anjish Nyoupane",
        position: "MEMBER",
        grade: 12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Bishal Pokhrel",
        position: "MEMBER",
        grade: 12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Aayush Kalwar",
        position: "MEMBER",
        grade: 12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Prashant Pandey",
        position: "MEMBER",
        grade: 11,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Shrijan Pandey",
        position: "MEMBER",
        grade: 11,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Sagar Sharma",
        position: "MEMBER",
        grade: 11,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Keshav Sharma Ghimire",
        position: "MEMBER",
        grade: 11,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Aswin Gautam",
        position: "MEMBER",
        grade: 11,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Asim Kandel",
        position: "MEMBER",
        grade: 11,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Sujan Barghare",
        position: "MEMBER",
        grade: 11,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Sugam Neupane",
        position: "MEMBER",
        grade: 11,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "member",
        name: "Danish Zehen",
        position: "MEMBER",
        grade: 11,
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

// Advisors Data
const advisors = [{
        type: "advisor",
        name: "Dinesh Thapa",
        position: "Advisor",
        image: "https://kalikaschoolbtl.edu.np/public/storage/profiles/February2023/U760qbJVMpmeAEL1PpMK.jpg",
        social: {
            linkedin: "",
            twitter: ""
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "advisor",
        name: "Arbind Kumar Dubey",
        position: "Advisor",
        image: "https://scontent.fkep3-1.fna.fbcdn.net/v/t1.6435-9/80609008_2556502627797679_3545427414731456512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=rTOQW34e4eQQ7kNvwFitxSP&_nc_oc=AdktgjOHteoS5m_-WdsGu3KAdNfqn7IwvPlFD7HcHTV1qzZTtSu8-X-QW4NWBicrLMw&_nc_zt=23&_nc_ht=scontent.fkep3-1.fna&_nc_gid=u1J1CwPFySmD-qdZi6SKiA&oh=00_AfNgAYjfo96E60U0KcXi75hYht7-Ov4IRgxUeUouERYBbw&oe=6869FA03",
        social: {
            linkedin: "",
            github: ""
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "advisor",
        name: "Vishnu Neupane",
        position: "Advisor",
        image: "https://scontent.fkep3-1.fna.fbcdn.net/v/t39.30808-6/494478540_23908497598744229_4993761312091139037_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vRTtHnk10s4Q7kNvwF3cidC&_nc_oc=Adm8lUuyIavj9plscNLGsoTzOYShgh6qB5PeaeJxKrOQMJFzwLQr9kw1IyQ7XjI3Ypk&_nc_zt=23&_nc_ht=scontent.fkep3-1.fna&_nc_gid=AZ3RRsTb__Ul01vWrSF5OA&oh=00_AfNDAXQmt5DxGAHx87LToXL9BNdGZHGbx7NxsuGZxOBZzg&oe=68484F1E",
        social: {
            linkedin: "",
            website: ""
        },
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

async function seedDatabase() {
    try {
        console.log('Connecting to MongoDB...');
        await client.connect();

        const db = client.db('ICTKALIKA_MEMBER');
        const collection = db.collection('members');

        // Clear existing data
        console.log('Clearing existing data...');
        await collection.deleteMany({});

        // Insert all data
        console.log('Inserting board members...');
        await collection.insertMany(boardMembers);

        console.log('Inserting regular members...');
        await collection.insertMany(members);

        console.log('Inserting advisors...');
        await collection.insertMany(advisors);

        // Create indexes for better performance
        console.log('Creating indexes...');
        await collection.createIndex({ type: 1 });
        await collection.createIndex({ name: 1 });
        await collection.createIndex({ position: 1 });
        await collection.createIndex({ grade: 1 });

        console.log('Database seeded successfully!');
        console.log(`Total documents inserted: ${boardMembers.length + members.length + advisors.length}`);

        // Display summary
        const counts = await collection.aggregate([
            { $group: { _id: '$type', count: { $sum: 1 } } }
        ]).toArray();

        console.log('\nData summary:');
        counts.forEach(item => {
            console.log(`${item._id}: ${item.count} members`);
        });

    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await client.close();
    }
}

// Run the seed function
seedDatabase();