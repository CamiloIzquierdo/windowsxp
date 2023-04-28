import { useContext, useState } from "react";
import * as Carpetas from "../../public/img/Index";
import { ButtonsStart } from "./ButtonsStart";
import { FilesStartModal } from "./FilesStartModal";
import { LineSeparator } from "./LineSeparator";
import { AllPrograms } from "./AllPrograms";
import { GlobalContext } from "../context/GlobalContext";

export const StartOpen = () => {
    const [toggleAll, setToggleAll] = useState(false);
    const { setToggleError } = useContext(GlobalContext);
    return (
        <div className="max-h-[500px] min-h-[500px] w-96 bg-white rounded-t-lg relative">
            <div className="h-[70px] bg-gradient-to-b from-blue-600 to-blue-500 flex px-2 items-center gap-3 rounded-t-lg">
                <img
                    src={Carpetas.Ajedrez}
                    alt=""
                    className="w-14 h-14 flex justify-center border border-white rounded-md"
                />
                <span className="text-xl text-white font-bold">Camilo</span>
            </div>
            <LineSeparator size="lg" className="absolute" />

            <div className="flex h-[430px]">
                <div className="flex flex-[50%] bg-white flex-col space-y-0 items-center justify-between">
                    <div className="flex flex-col gap-2 py-1">
                        <FilesStartModal
                            image={Carpetas.Explorer}
                            firstText="Internet"
                            secondText="Internet Explorer"
                            onClick={() => setToggleError(true)}
                        />
                        <a
                            href="mailto:camiloi.99@hotmail.com"
                            className="w-full"
                        >
                            <FilesStartModal
                                image={Carpetas.Email}
                                firstText="E-mail"
                                secondText="Outlook Express"
                            />
                        </a>
                        <LineSeparator color="tertiary" />
                        <FilesStartModal
                            image={Carpetas.WindowsMedia}
                            secondText="Windows Media Player"
                            onClick={() => setToggleError(true)}
                        />
                        <FilesStartModal
                            image={Carpetas.Msn}
                            secondText="MSN"
                            onClick={() => setToggleError(true)}
                        />
                        <FilesStartModal
                            image={Carpetas.Messenger}
                            secondText="Windows Messenger"
                            onClick={() => setToggleError(true)}
                        />
                        <FilesStartModal
                            image={Carpetas.Wordpad}
                            secondText="WordPad"
                            onClick={() => setToggleError(true)}
                        />
                        <FilesStartModal
                            image={Carpetas.Paint}
                            secondText="Paint"
                            onClick={() => setToggleError(true)}
                        />
                    </div>
                    {toggleAll && (
                        <div
                            className="absolute top-[150px] left-36"
                            onMouseEnter={() => setToggleAll(true)}
                            onMouseLeave={() => setToggleAll(false)}
                        >
                            <AllPrograms />
                        </div>
                    )}
                    <div
                        className="flex gap-2 h-7 cursor-default items-center hover:bg-blue-500  w-full justify-center"
                        onMouseEnter={() => setToggleAll(true)}
                        onMouseLeave={() => setToggleAll(false)}
                    >
                        <span className="font-bold text-xs">All Programs</span>
                        <img src={Carpetas.AllIco} alt="" />
                    </div>
                </div>
                <div className="flex flex-[50%] bg-blue-200 flex-col space-y-0 items-start gap-2 py-1">
                    <FilesStartModal
                        image={Carpetas.Documents}
                        secondText="My Documents"
                        imageSize="secondary"
                        onClick={() => setToggleError(true)}
                    />
                    <FilesStartModal
                        image={Carpetas.Folder}
                        secondText="My Recent Documents"
                        imageSize="secondary"
                        onClick={() => setToggleError(true)}
                    />
                    <FilesStartModal
                        image={Carpetas.Images}
                        secondText="My Pictures"
                        imageSize="secondary"
                        onClick={() => setToggleError(true)}
                    />
                    <FilesStartModal
                        image={Carpetas.Music}
                        secondText="My Music"
                        imageSize="secondary"
                        onClick={() => setToggleError(true)}
                    />
                    <FilesStartModal
                        image={Carpetas.Computer}
                        secondText="My Computer"
                        imageSize="secondary"
                        onClick={() => setToggleError(true)}
                    />
                    <LineSeparator color="secondary" />
                    <FilesStartModal
                        image={Carpetas.Control}
                        secondText="Control Panel"
                        imageSize="secondary"
                        onClick={() => setToggleError(true)}
                    />
                    <FilesStartModal
                        image={Carpetas.Access}
                        secondText="Set Program Access And Defaults"
                        imageSize="secondary"
                        onClick={() => setToggleError(true)}
                    />
                    <FilesStartModal
                        image={Carpetas.Connect}
                        secondText="Connect To"
                        imageSize="secondary"
                        onClick={() => setToggleError(true)}
                    />
                    <FilesStartModal
                        image={Carpetas.Printer}
                        secondText="Printers And Faxes"
                        imageSize="secondary"
                        onClick={() => setToggleError(true)}
                    />
                    <LineSeparator color="secondary" />
                    <FilesStartModal
                        image={Carpetas.Search}
                        secondText="Search"
                        imageSize="secondary"
                        onClick={() => setToggleError(true)}
                    />
                </div>
            </div>
            <div className="h-9 w-full flex bg-gradient-to-b from-blue-600 to-blue-500">
                <ButtonsStart />
            </div>
        </div>
    );
};
