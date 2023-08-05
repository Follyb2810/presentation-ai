import * as Img from './component/images/img'

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


    const datas ={
        presentHeader:{
            title:"How it  <span class='text-Yellow'>works</span>",
            subtitle:"Present AI allows you to upload your slides and use hand",
            span:'gestures to control your presentation'
        },
        feature:{
            title:"Key <span class='text-Yellow'>Features</span>"
        },
    }

export {
datas,
featureCard
}