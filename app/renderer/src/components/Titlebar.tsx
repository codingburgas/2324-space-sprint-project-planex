import "./Titlebar.css"
const closePath: string | undefined = "../../public/close.svg"
const resizePath: string | undefined = "../../public/resize.svg"
const moonPath: string | undefined = "../../public/moon.svg"
const iconPath: string | undefined = "../../public/icon.svg"


declare global {
  interface Window {
    electron: {
      send: (channel: string, data: any) => void;
    };
  }
}

export default function Titlebar() {
    const maximize = () => {
         window.electron.send("bar", "max");
    }
    const close = () => {
        window.electron.send("bar", "close");
    }
    const minimize = () => {
        window.electron.send("bar", "min");
    }
    return (
        <div class=" __titlebar bg-transparent bg-[#000] antialiased">
            <div class="flex flex-row pl-16 antialiased">
                <img srcSet={iconPath} alt="icon" class="pt-4" />
                <div class="ml-auto mr-0 flex flex-row antialiased">
                    <div class="flex justify-center items-center w-[6rem] h-[4.5rem] duration-200 close btn hover:bg-[#888] hover:bg-opacity-60 rounded-sm" onClick={minimize}>
                        <img src={closePath} alt="close" />
                    </div>
                    <div class="flex justify-center items-center w-[6rem] h-[4.5rem] duration-200 hover:bg-[#888] hover:bg-opacity-60 hover:cursor-default btn rounded-sm" onClick={maximize}>
                        <img srcSet={resizePath} alt="resize" />
                    </div>
                    <div class="flex justify-center items-center w-[6rem] h-[4.5rem] duration-200 hover:bg-[#FEDD00] hover:bg-opacity-95 hover:cursor-default close btn rounded-sm" onClick={close}>
                        <img srcSet={moonPath} alt="moon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
