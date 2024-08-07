import { useRef } from "react";
import "./App.css";
import { useState } from "react";

const data = [
    {
        title: "What is Frontend Mentor, and how will it help me?",
        content:
            "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
        title: "Is Frontend Mentor free?",
        content:
            "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
        title: "Can I use Frontend Mentor projects in my portfolio?",
        content:
            "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
        title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        content:
            "The best place to get help is inside Frontend Mentor's Discord community. There's a help  channel where you can ask questions and seek support from other community members.",
    },
];

function Accordion({ title, content, isOpen, onHandleActive }) {
    const contentHeight = useRef();
    const activeButton = isOpen ? (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={31}
            fill="none"
            viewBox="0 0 30 31"
        >
            <path
                fill="#301534"
                d="M15 3.313A12.187 12.187 0 1027.188 15.5 12.2 12.2 0 0015 3.312zm4.688 13.124h-9.375a.938.938 0 010-1.875h9.374a.938.938 0 010 1.876z"
            />
        </svg>
    ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={31}
            fill="none"
            viewBox="0 0 30 31"
        >
            <path
                fill="#AD28EB"
                d="M15 3.313A12.187 12.187 0 1027.188 15.5 12.203 12.203 0 0015 3.312zm4.688 13.124h-3.75v3.75a.938.938 0 01-1.876 0v-3.75h-3.75a.938.938 0 010-1.875h3.75v-3.75a.938.938 0 011.876 0v3.75h3.75a.938.938 0 010 1.876z"
            />
        </svg>
    );

    return (
        <div className="py-4">
            <div
                className="flex items-center justify-between sm:mb-4 hover:cursor-pointer hover:text-[#B028F2] transition duration-300 ease-in-out"
                onClick={onHandleActive}
            >
                <h3 className="font-bold mr-20">{title}</h3>
                <div className="hover:cursor-pointer">{activeButton}</div>
            </div>
            <div
                className="overflow-hidden transition-height duration-300 ease-in-out"
                ref={contentHeight}
                style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <p className="text-Grayish_purple">{content}</p>
            </div>
        </div>
    );
}

function App() {
    let [states, setStates] = useState(Array(4).fill(false));

    function handleStates(i) {
        let nextStates = states.slice();
        for (let j = 0; j < nextStates.length; j++) {
            if (j == i) {
                if (nextStates[i]) {
                    nextStates[i] = false;
                } else {
                    nextStates[i] = true;
                }
            } else {
                nextStates[j] = false;
            }
        }
        setStates(nextStates);
    }

    return (
        <div className="min-w-[350px] w-[40%] bg-white p-4 lg:p-8 rounded-md">
            <div className="flex gap-6 items-center my-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={31}
                    fill="none"
                    viewBox="0 0 40 41"
                >
                    <path
                        fill="#AD28EB"
                        d="M37.5 20.5a2.467 2.467 0 01-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 01-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 010-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 014.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0137.5 20.5z"
                    />
                </svg>
                <h1 className="text-4xl lg:text-6xl font-bold text-Dark_purple">
                    FAQs
                </h1>
            </div>
            <div className="w-full">
                {data.map((d, i) => {
                    return (
                        <Accordion
                            key={i}
                            title={d.title}
                            content={d.content}
                            isOpen={states[i]}
                            onHandleActive={() => handleStates(i)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
