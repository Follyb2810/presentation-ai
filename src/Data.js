import { Form, InputGroup } from 'react-bootstrap'
import * as Img from './component/images/img'
import {FaArrowRight} from 'react-icons/fa'

const featureCard =[
    {
        title:"Hand Gesture Control",
        subtitle:"Say goodbye to clunky clickers and awkward pauses. Effortlessly move through your presentation without ever taking your eyes off your audience. ",
        logo:Img.Feature
    },
    {
        title:"Real-Time Polling",
        subtitle:"gather valuable insights and opinions from your audience, and make your presentations more interactive and engaging. ",
        logo:Img.Feature1
    },
    {
        title:"Collaborate with Your Team",
        subtitle:"Share your presentation with others, provide feedback, and make changes in real-time. ",
        logo:Img.Feature2
    },
    {
        title:"Remote Presentations",
        subtitle:"Share your presentations.whether in-person or remotely, eliminating technical glitches and compatibility issues.",
        logo:Img.Feature3
    },
]

const WhoNeedCard = {
    first:["Business and Corporate","Event presentations","Training and Workshops"],
    last:["Training and Workshops","Educators","Startups and Entrepreneurship","Tech and Innovation"]
}


    const datas ={
        presentHeader:{
            title:"How it  <span class='text-Yellow'>works</span>",
            subtitle:"Present AI allows you to upload your slides and use hand",
            span:'gestures to control your presentation'
        },
        feature:{
            title:"Key <span class='text-Yellow'>Features</span>"
        },
        whoNeed:{
            title:"Who is it <span class='text-Yellow'>For</span>"
        },
        whatUsersay:{
            title:"What our <span class='text-Yellow'>users say</span> say"
        },
        contact:{
            title:"Request a Demo<span class='text-Yellow'>Demo</span>",
            subtitle:"Ready to Revolutionize Your Presentations? Book a Demo ",
            span:'Now and Ignite the Power of PresentAI.'
        }
    }
const fagQuest =[
    {
        head:'Business and Corporate',
        id:1,
        body:`Elevate your corporate presentations with PresentAI. Imagine effortlessly guiding potential investors through your business vision with the wave of your hand. The app's hand gesture control adds a touch of innovation and excitement to your pitch, leaving a lasting impression on your audience. Secure funding, seal deals, and make an impact with powerful presentations that showcase your company's true potential.`
    },
    {
        head:'Startups and Entrepreneurship',
        id:2,
        body:`For startups, PresentAI is a game-changer. It will infuse your pitches with confidence and charm, helping you stand out from the crowd. Use hand gesture control to navigate through your visionary ideas and captivate your audience. Show your creativity and passion, leaving investors eager to join your journey and support your dreams.`
    },
    {
        head:'Sales and Marketing',
        id:3,
        body:`Turbocharge your sales efforts with PresentAI. The hand gesture control will turn your product demos into a dynamic experience. With simple gestures, showcase key features, and watch your clients' interest soar. Build strong relationships, close more deals, and create lasting impressions that set your sales team apart from the competition.`
    },
    {
        head:'Education',
        id:4,
        body:`PresentAI will empower you to interact with your students like never before. Say goodbye to traditional presentations and embrace the magic of hand gesture control. With a simple wave, you'll effortlessly navigate through lessons, keeping your students engaged and excited about learning. Watch their faces light up as you make learning an interactive and immersive experience, making your classroom a hub of creativity and enthusiasm.`
    },
    {
        head:'Training and Workshops',
        id:5,
        body:`lAs a trainer, PresentAI will take your workshops to new heights. Use hand gesture control to engage your participants and make learning fun. Navigate through concepts effortlessly, keeping everyone captivated and focused. The positive feedback and increased retention among trainees will make PresentAI your go-to tool for impactful training sessions.`
    },
    {
        head:'Event Presentations',
        id:6,
        body:`Unleash the Power of Gesture-Controlled Presentations! Captivate your audience with dynamic visuals, interactive features, and seamless hand gestures that bring your content to life. Elevate your events and leave a lasting impact on every attendee. Experience the future of presentations with PresentAI.`
    },
    {
        head:'Tech and Innovation',
        id:7,
        body:`Tech enthusiasts will find a perfect match in PresentAI. The app's futuristic hand gesture control aligns seamlessly with your audience's tech-savvy nature. Amplify the impact of your ideas, turning presentations into a captivating showcase of innovation and imagination.`
    },
]

const userComment =[
    {
        id:1,
        img:Img.Logo,
        name:'hello',
        initial:'hello',
        comment:`Wow! PresentAI has taken my public speaking skills to a whole new level. The app's hand gesture control feels like a natural extension of my thoughts, allowing me to effortlessly navigate through my slides. I genuinely feel more connected to my audience, and the engagement level during my talks has soared.`
    },
    {
        id:2,
        img:Img.Logo,
        name:'hello',
        initial:'hello',
        comment:`Wow! PresentAI has taken my public speaking skills to a whole new level. The app's hand gesture control feels like a natural extension of my thoughts, allowing me to effortlessly navigate through my slides. I genuinely feel more connected to my audience, and the engagement level during my talks has soared.`
    },
    {
        id:3,
        img:Img.Logo,
        name:'hello',
        initial:'hello',
        comment:`Wow! PresentAI has taken my public speaking skills to a whole new level. The app's hand gesture control feels like a natural extension of my thoughts, allowing me to effortlessly navigate through my slides. I genuinely feel more connected to my audience, and the engagement level during my talks has soared.`
    },
    {
        id:4,
        img:Img.Logo,
        name:'hello',
        initial:'hello',
        comment:`Wow! PresentAI has taken my public speaking skills to a whole new level. The app's hand gesture control feels like a natural extension of my thoughts, allowing me to effortlessly navigate through my slides. I genuinely feel more connected to my audience, and the engagement level during my talks has soared.`
    },
    {
        id:5,
        img:Img.Logo,
        name:'hello',
        initial:'hello',
        comment:`Wow! PresentAI has taken my public speaking skills to a whole new level. The app's hand gesture control feels like a natural extension of my thoughts, allowing me to effortlessly navigate through my slides. I genuinely feel more connected to my audience, and the engagement level during my talks has soared.`
    },
    {
        id:4,
        img:Img.Logo,
        name:'hello',
        initial:'hello',
        comment:`Wow! PresentAI has taken my public speaking skills to a whole new level. The app's hand gesture control feels like a natural extension of my thoughts, allowing me to effortlessly navigate through my slides. I genuinely feel more connected to my audience, and the engagement level during my talks has soared.`
    },
]

const FooterData =[
  {
    img:Img.Logo,
    foot:`+234 0802 065-3695`,
    footone:null,
    footSecond:`support@presentai.agency`
  },
  {
    img:null,
    foot:`Quick Links`,
    footone:`Features`,
    footSecond:`support@presentai.agency`
  },
  {
    img:null,
    foot:`Home`,
    footone:null,
    footSecond:`Contact Us`
  },
  {
    img:null,
    foot:`Subscribe to our newsletter`,
    footone: <InputGroup className="mb-3">
    <Form.Control
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      size="sm"
    />
    <InputGroup.Text id="basic-addon2"><FaArrowRight/></InputGroup.Text>
  </InputGroup>,
    footSecond:null
  },
]
export {
datas,
featureCard,
WhoNeedCard,
fagQuest,
userComment,
FooterData
}