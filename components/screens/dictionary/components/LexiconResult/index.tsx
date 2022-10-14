import { AnimatePresence, motion } from "framer-motion";
import { fadeMotions } from "lib/fadeMotions";
import { MdOutlineVolumeOff, MdOutlineVolumeUp } from "react-icons/md";
import { useAudio } from "react-use";

import Tooltip from "components/common/Tooltip";

import { Lexicon } from "../../types";
import ListOfMeanings from "./ListOfMeanings";

const LexiconResult = ({ lexicon }: { lexicon: Lexicon }) => {
    const phonetic = lexicon.phonetics.find(
        (returnedPhonetic) =>
            returnedPhonetic.audio !== "" && returnedPhonetic.text !== ""
    );
    const [pronunciationAudio, pronunciationState, pronunciationControls] =
        useAudio({
            src: phonetic?.audio ?? "",
        });

    return (
        <motion.div {...fadeMotions} className="mt-6">
            <div className="flex items-center gap-x-2">
                {pronunciationAudio}

                {pronunciationState.playing ? (
                    <Tooltip title="Pause spelling audio">
                        <button onClick={pronunciationControls.pause}>
                            <MdOutlineVolumeUp />
                        </button>
                    </Tooltip>
                ) : (
                    <Tooltip title="Play spelling audio">
                        <button onClick={pronunciationControls.play}>
                            <MdOutlineVolumeOff />
                        </button>
                    </Tooltip>
                )}

                <div className="">
                    <h1 className="text-4xl text-gray-600 dark:text-gray-300 font-bold">
                        {lexicon.word}
                    </h1>
                    <span>{phonetic?.text}</span>
                </div>
            </div>

            <ListOfMeanings meanings={lexicon.meanings} />
        </motion.div>
    );
};

export default LexiconResult;
