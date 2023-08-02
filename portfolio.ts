import emoji from 'react-easy-emoji';
import {
    EducationType,
    ExperienceType,
    ProjectType,
    SkillsSectionType,
    SkillBarsType,
    SEODataType,
    SocialLinksType,
    GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
    name: 'Gregory Johnson',
    title: "Hi 🖐all, I'm Gregory",
    description:
        "I'm highly skilled and motivated Full Stack React Developer with 8 years of experience in software and web development, seeking a challenging position in a dynamic organization to contribute my expertise and grow professionally.",
    resumeLink: 'https://drive.google.com/file/d/1bJXP__Yzwinoot4rE8Lk4gubV_2R_Ag2/view?usp=sharing',
};

export const openSource = {
    githubUserName: 'gregoryjohnsonjg6',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
    // url: 'https://mjtechworks.github.io/',
    // linkedin: 'https://www.linkedin.com/in/mjtechworks/',
    github: 'https://github.com/gregoryjohnsonjg6',
    // instagram: 'https://www.instagram.com/__hanzla100',
    // facebook: 'https://www.facebook.com/mjtechworks',
    // twitter: 'https://twitter.com/mjtechworks',
};

export const skillsSection: SkillsSectionType = {
    title: 'What I do',
    subTitle:
        'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    data: [
        {
            title: 'Full Stack Development',
            lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
            skills: [
                emoji(
                    '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
                ),
                emoji('⚡ Building responsive static websites using Next.js'),
                emoji(
                    '⚡ Building RESTful APIs in Django & Django REST Framework'
                ),
            ],
            softwareSkills: [
                {
                    skillName: 'HTML-5',
                    fontAwesomeClassName: 'vscode-icons:file-type-html',
                },
                {
                    skillName: 'CSS-3',
                    fontAwesomeClassName: 'vscode-icons:file-type-css',
                },
                {
                    skillName: 'JavaScript',
                    fontAwesomeClassName: 'logos:javascript',
                },
                {
                    skillName: 'Reactjs',
                    fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
                },
                {
                    skillName: 'Nextjs',
                    fontAwesomeClassName: 'vscode-icons:file-type-light-next',
                },
                {
                    skillName: 'Python',
                    fontAwesomeClassName: 'logos:python',
                },
                {
                    skillName: 'Django',
                    fontAwesomeClassName: 'vscode-icons:file-type-django',
                },

                {
                    skillName: 'Redux',
                    fontAwesomeClassName: 'logos:redux',
                },
                {
                    skillName: 'NPM',
                    fontAwesomeClassName: 'logos:npm-icon',
                },
                {
                    skillName: 'Yarn',
                    fontAwesomeClassName: 'logos:yarn',
                },
            ],
        },
        {
            title: 'Cloud Infra-Architecture',
            lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
            skills: [
                emoji('⚡ Experience of working on multiple cloud platforms'),
                emoji(
                    '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
                ),
                emoji(
                    '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
                ),
            ],
            softwareSkills: [
                // ? Check README To get icon details
                {
                    skillName: 'AWS',
                    fontAwesomeClassName: 'logos:aws',
                },
                {
                    skillName: 'Azure',
                    fontAwesomeClassName: 'logos:microsoft-azure',
                },
                {
                    skillName: 'Heroku',
                    fontAwesomeClassName: 'logos:heroku-icon',
                },
                {
                    skillName: 'PostgreSQL',
                    fontAwesomeClassName: 'logos:postgresql',
                },
                {
                    skillName: 'Github',
                    fontAwesomeClassName: 'akar-icons:github-fill',
                },
                {
                    skillName: 'Docker',
                    fontAwesomeClassName: 'logos:docker-icon',
                },
                {
                    skillName: 'Github Actions',
                    fontAwesomeClassName: 'logos:github-actions',
                },
                {
                    skillName: 'Cloudinary',
                    fontAwesomeClassName: 'logos:cloudinary',
                },
                {
                    skillName: 'Nginx',
                    fontAwesomeClassName: 'logos:nginx',
                },
                {
                    skillName: 'Sentry',
                    fontAwesomeClassName: 'logos:sentry-icon',
                },
            ],
        },
        // {
        //     title: 'Blockchain',
        //     lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
        //     skills: [
        //         emoji(
        //             '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        //         ),
        //         emoji(
        //             '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        //         ),
        //         emoji(
        //             '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        //         ),
        //         emoji(
        //             '⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'
        //         ),
        //         emoji(
        //             '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        //         ),
        //     ],
        //     softwareSkills: [
        //         {
        //             skillName: 'Ethereum',
        //             fontAwesomeClassName: 'logos:ethereum',
        //         },
        //         {
        //             skillName: 'Solidity',
        //             fontAwesomeClassName: 'logos:solidity',
        //         },
        //         {
        //             skillName: 'Web3js',
        //             fontAwesomeClassName: 'logos:web3js',
        //         },
        //         {
        //             skillName: 'Metamask',
        //             fontAwesomeClassName: 'logos:metamask-icon',
        //         },
        //         {
        //             skillName: 'Ganache',
        //             fontAwesomeClassName: 'logos:ganache-icon',
        //         },
        //     ],
        // },
    ],
};

export const SkillBars: SkillBarsType[] = [
    {
        Stack: 'Frontend/Design', //Insert stack or technology you have experience in
        progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
        Stack: 'Backend',
        progressPercentage: '80',
    },
    {
        Stack: 'Blockchain', //Insert stack or technology you have experience in
        progressPercentage: '80', //Insert relative proficiency in percentage
    },
    {
        Stack: 'Programming',
        progressPercentage: '100',
    },
];

export const educationInfo: EducationType[] = [
    {
        schoolName: 'University of Alberta',
        subHeader: 'Bachelor of Science in Computer Science',
        duration: 'September 2010 - November 2014',
        desc: '',
        grade: 'Grade A',
        descBullets: [
            'Completed a capstone project on developing a web-based project management tool',
        ],
    },
];

export const experience: ExperienceType[] = [
    {
        role: 'Full-Stack Developer',
        company: 'Aware',
        companyLogo: '/img/icons/common/Aware.jpg',
        date: 'November 2021 - July 2023',
        desc: '',
        descBullets: [
            `Led the development and maintenance of 20 front-ends, resulting in a 25% increase in user engagement.`,
            `Wrote front-end and back-end code, integrated with frameworks and APIs, and utilized multiple CLI tools and configuration GUI's.`,
            `Successfully developed and updated 4 websites, resulting in a 30% increase in website traffic and 20% increase in user satisfaction.`,
            `Successfully deployed 7 attractive, responsive, and mobilefriendly website contexts and elements.`,
            `Created informative and effective documentation, reports, and inline comments on 100 % of code/work accomplished.`,
        ],
    },
    {
        role: 'Web Applications Developer',
        company: 'Vizworx',
        companyLogo: '/img/icons/common/Vizworx.jpg',
        date: 'April 2019 – November 2021',
        desc: '',
        descBullets: [
            `Optimization web services and APIs that enabled seamless communication between front-end and back-end components, enhancing performance by 20%.`,
            `Set up a relational database manager for storage, retrieval, and manipulation of data, leading to improved data accessibility by 30%.`,
            `Utilized source control, automation tools, and CI/CD processes to improve product life cycles and optimize production releases speed by 25%.`,
            `Designed and implemented databases and data storage solutions, improving data retrieval times by 40% and reducing data loss by 50%.`,
        ],
    },
    {
        role: 'Junior Full-Stack Developer',
        company: 'Jobber',
        companyLogo: '/img/icons/common/Jobber.jpg',
        date: 'Octorber 2016 – April 2019',
        desc: '',
        descBullets: [
            `Expertly created 30 new features utilizing HTML/JS/CSS to implement rich and engaging user experiences.`,
            `Successfully developed and maintained 30 REST APIs writing documentation using OpenAPI specifications.`,
            `Collaborated with 2 engineering teams on domain, design, and code testing for 12 projects.`,
            'Participated in weekly code reviews with 4 senior developers.',
            'Wrote 47 automated tests to raise code quality as part of the development process',
            'Followed industry best practices, company best practices, and learned 3 new technologies.'
        ],
    },
];

export const projects: ProjectType[] = [
    {
        name: 'Ember Sword (06/2021 - 09/2021)',
        desc: `Wrote the Smart Contracts of weapons and developed Front-end for marketplace by using the React and
        Web3.js`,
        github: '',
        preview: '/img/icons/project/embersword.png',
        link: 'https://embersword.com',
    },
    {
        name: 'our health service (01/2021 - 03/2021)',
        desc: `Developed Front-end and Back-end for offering you protection from serious illness with COVID-19 (coronavirus) using React, Node.js`,
        github: '',
        preview: '/img/icons/project/React_vaccine.png',
        link: 'https://www.hse.ie/eng/',
    },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
    title: 'Gregory Johnson',
    description: 'A passionate Full Stack React Developer.',
    author: 'Gregory Johnson',
    image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
    url: 'https://gregory-portfolio-gregoryjohnsonjg6.vercel.app',
    keywords: [
        'Gregroy',
        'Gregory Johnson',
        '@gregoryjohnsonjg6',
        'gregoryjohnsonjg6',
        'Portfolio',
        'Gregory Portfolio ',
        'Gregory Johnson Portfolio',
    ],
};
