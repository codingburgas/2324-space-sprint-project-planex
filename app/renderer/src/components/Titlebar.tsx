import "./Titlebar.css"

const closePath: string | undefined = "../../public/close.svg"
const resizePath: string | undefined = "../../public/resize.svg"
const moonPath: string | undefined = "../../public/moon.svg"
const iconPath: string | undefined = "../../public/icon.svg"

export default function Titlebar() {
    return (
        <div class=" __titlebar bg-transparent bg-[#000] antialiased">
            <div class="flex flex-row pl-16 antialiased">
                <img srcSet={iconPath} alt="icon" class="pt-4" />
                <div class="ml-auto mr-0 flex flex-row antialiased">
                    <div class="flex justify-center items-center w-[6rem] h-[4.5rem] duration-200 close btn">
                        <img src={closePath} alt="close" />
                    </div>
                    <div class="flex justify-center items-center w-[6rem] h-[4.5rem] duration-200 hover:bg-white hover:cursor-default btn">
                        <img srcSet={resizePath} alt="resize" />
                    </div>
                    <div class="flex justify-center items-center w-[6rem] h-[4.5rem] duration-200 hover:bg-white hover:cursor-default close btn">
                        <img srcSet={moonPath} alt="moon" />
                    </div>
                </div>
            </div>
        </div>
    )
}