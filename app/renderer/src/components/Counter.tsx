import { createSignal, onCleanup, createEffect, onMount } from "solid-js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./typeanimation.css";
import { Random } from "random-js"; 

const CombinedComponent = () => {
  const yellowBG : string | undefined = "bg-yellow-500";
  const greenBG : string | undefined = "bg-green-500";
  const initialBG : string | undefined = "bg-red-500";


  const [progress, setProgress] = createSignal(0);
  const [loadingColor, setLoadingColor] = createSignal(initialBG);

  const interval = setInterval(() => {
    setProgress((prev) => (prev < 100 ? prev + 3 : 100));
  }, 500);

  onCleanup(() => clearInterval(interval));

  createEffect(() => {
    if (progress() >= 33) 
      setLoadingColor(progress() >= 33 && progress() < 66 ? yellowBG : greenBG);
      const loadingScreen = document.querySelector(".__loading-screen");

    if (progress() >= 100) {
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.filter = 'blur(10px)';
      }
      setTimeout(() => {
        if (loadingScreen) {
          loadingScreen.style.display = 'none';
        }
      }, 2000);
    }
  });

  onMount(() => {
    AOS.init();
  });

  const [text, setText] = createSignal(""); 
  const [message, setMessage] = createSignal("");
  const [typedText, setTypedText] = createSignal("");
  let messageIndex = 0;

  const facts = ["The earth is almost 1 AU away from the sun (1.496e+8).", "Saturn's rings are 90% water.", "Jupiter's largest moon has a salty ocean that contains more water than on Earth.", "The Solar System formed 4.6 billion years ago.", "The Sun is 99.8% of the Solar System's mass.", "The Sun is 109 times the diameter of the Earth.", "The Sun is 330,000 times the mass of the Earth.", "The Sun is 93 million miles away from the Earth.", "The Sun is 4.6 billion years old.", "The Sun is a star."];

  let state = 0; 
  const messages = ["", ".", "..", "..."]; 

  const randomiseMessage = () =>{
    messageIndex = new Random().integer(0, facts.length - 1);
    console.log(messageIndex)
    setMessage(facts[messageIndex]);
  }
  createEffect( ()=>{
    setInterval(()=> {
    if (typedText().length === 0)
      randomiseMessage();
    }, 10);
    onCleanup(() => clearInterval(typedText()));
});

  const updateText = () => {
    if (state === 4)
      state = 0;
    setText(messages[state]); 
    state++;
  };


  createEffect(() => {
    const interval = setInterval(updateText, 500);
    onCleanup(() => clearInterval(interval));
  });

  let timeoutID : any = 0;

  const nukeTimout = () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  };


 const textTyping = (msg = message(), i = 0, deleting = false) => {
    nukeTimout();
    if (!deleting) {
      if (i < msg.length) {
        setTypedText((typed) => typed + msg[i]);
        timeoutID = setTimeout(() => textTyping(msg, i + 1, deleting), 50);
      } else {
        timeoutID = setTimeout(() => textTyping(msg, i - 1, true), 1000);
      }
    }
    else if (deleting) {
      if (i >= 0) {
        setTypedText((typed) => typed.substring(0, i));
        timeoutID = setTimeout(() => textTyping(msg, i - 1, deleting), 50);
      } else {
        timeoutID = setTimeout(() => textTyping(msg, 0, false), 1000);
      }
    }
  };


  createEffect(() => {
    setTypedText("");
    textTyping(message());
  });

  onCleanup(() => nukeTimout());

  return (
    <div class="__loading-screen text-center overflow-hidden h-screen w-screen bg-black absolute z-[999] block" style={{ "font-family": "Inter, sans-serif" }}>
        <span class="text-5xl text-[#888] mt-44 inline absolute left-[50%] -translate-x-[50%] selection:bg-transparent selection:cursor-default hover:cursor-default max-h-fit" id="anim"> {typedText()}
        </span>
        <div class="flex flex-col justify-center items-center h-screen bg-black">
            <div class="w-[45vw] flex flex-col items-center __loading-bar ">
                <div class="text-[#888] text-center text-5xl mb-8 ml-auto mr-0">
                    <span class="text-[#efefef] opacity-85 text-4xl selection:bg-transparent selection:cursor-default hover:cursor-default"> {progress()}% Loaded </span>
                </div>
                <div class="w-full h-16 rounded-lg overflow-hidden border-solid border-x-[0.1rem] border-y-[0.1rem] border-[#efefef] border-opacity-75 mb-8">
                    <div
                    class={`h-full transition-width duration-500 ease-in-out rounded-md ${loadingColor()}`}
                    style={{ width: `${progress()}%` }}
                    ></div>
                </div>
                <span class="text-[#efefef] text-3xl opacity-85 selection:bg-transparent selection:cursor-default hover:cursor-default"  data-aos="fade-right" data-aos-duration="1000">loading textures<span>{text()}</span> </span>
            </div>
        </div>
    </div>
  );
};

export default CombinedComponent;

