import { AiFillGithub } from "react-icons/ai";
import { Man, Date, Pointer } from "../../public/img/Index";
import { BoxFolder } from "./BoxFolder";
import { GrLinkedinOption } from "react-icons/gr";

export const LeftBoxFolder = () => {
    return (
        <div className="flex-[20%] flex h-full bg-xp-folder-blue p-2 flex-col gap-4">
            <BoxFolder title="Sobre mi">
                <span className="flex items-center gap-2">
                    <img src={Man} width={20} alt="" />
                    Camilo Izquierdo
                </span>
                <span className="flex items-center gap-2">
                    <img src={Date} width={20} alt="" />
                    23 años
                </span>
                <span className="flex items-center gap-2">
                    <img src={Pointer} width={20} alt="" />
                    Rosario, Santa Fe Argentina.
                </span>
            </BoxFolder>
            <BoxFolder title="Mis conocimientos">
                <span>HTML5, Css, TailWind,</span>
                <span>JavaScript, React, Directus</span>
                <span>Firebase, MongoDB, TypeScript, Vue</span>
            </BoxFolder>
            <BoxFolder title="Detalles">
                <span className="font-bold">My computer</span>
                <a
                    href="https://github.com/CamiloIzquierdo"
                    target="__blank"
                    className="cursor-pointer flex gap-1 items-center"
                >
                    <AiFillGithub className="text-base" />
                    <span>Ir a mi Github</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/camilo-izquierdo-99a660229/"
                    target="__blank"
                    className="cursor-pointer flex gap-1 items-center"
                >
                    <GrLinkedinOption className="text-base" />
                    <span>Ir a mi Linkedin</span>
                </a>
            </BoxFolder>
        </div>
    );
};
