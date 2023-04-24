import { FilesStartModal } from "./FilesStartModal";
import * as Carpetas from "../../public/img/Index";
import { LineSeparator } from "./LineSeparator";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export const AllPrograms = () => {
    const { setToggleError } = useContext(GlobalContext);

    return (
        <div className="h-[350px] w-[200px] bg-white relative border-l-[3px] border border-blue-500">
            <FilesStartModal
                image={Carpetas.Email}
                secondText="Outlook Express"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
            <FilesStartModal
                image={Carpetas.Messenger}
                secondText="Messenger"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
            <FilesStartModal
                image={Carpetas.Msn}
                secondText="MSN"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
            <div className="flex py-2">
                <LineSeparator color="tertiary" />
            </div>
            <FilesStartModal
                image={Carpetas.Computer}
                secondText="My computer"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
            <FilesStartModal
                image={Carpetas.Music}
                secondText="My Music"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
            <FilesStartModal
                image={Carpetas.Paint}
                secondText="Paint"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
            <FilesStartModal
                image={Carpetas.WindowsMedia}
                secondText="Windows Media"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
            <FilesStartModal
                image={Carpetas.Explorer}
                secondText="Internet Explorer"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
            <FilesStartModal
                image={Carpetas.Wordpad}
                secondText="Wordpad"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
            <FilesStartModal
                image={Carpetas.Spider}
                secondText="Solitaire Spider"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
            <FilesStartModal
                image={Carpetas.Solitaire}
                secondText="Solitaire"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
            <FilesStartModal
                image={Carpetas.Pinball}
                secondText="Pinball"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
            <FilesStartModal
                image={Carpetas.Winamp}
                secondText="Winamp"
                imageSize="tertiary"
                onClick={() => setToggleError(true)}
            />
        </div>
    );
};
