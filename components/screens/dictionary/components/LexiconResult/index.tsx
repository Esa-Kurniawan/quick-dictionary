import { MdOutlineVolumeOff, MdOutlineVolumeUp } from "react-icons/md";
import { useAudio } from "react-use";

import Tooltip from "components/common/Tooltip";

import { Lexicon } from "../../types";
import ListOfMeanings from "./ListOfMeanings";

const LexiconResult = ({ lexicon }: { lexicon: Lexicon }) => {
    const phonetic = lexicon.phonetics.find(
        (returnedPhonetic) =>
            returnedPhonetic.hasOwnProperty("audio") &&
            returnedPhonetic.hasOwnProperty("text")
    );
    const [pronunciationAudio, pronunciationState, pronunciationControls] =
        useAudio({
            src: phonetic?.audio ?? "",
        });

    const togglePronunciationPlay = () => {
        pronunciationState.playing
            ? pronunciationControls.pause()
            : pronunciationControls.play();
    };

    return (
        <div className="mt-6">
            <div className="flex gap-x-2">
                {pronunciationAudio}
                <button className="" onClick={togglePronunciationPlay}>
                    {pronunciationState.playing ? (
                        <Tooltip title="Play the spelling audio">
                            <span>
                                <MdOutlineVolumeUp />
                            </span>
                        </Tooltip>
                    ) : (
                        <Tooltip title="Unplay the spelling audio">
                            <span>
                                <MdOutlineVolumeOff />
                            </span>
                        </Tooltip>
                    )}
                </button>
                <div className="flex flex-col">
                    <h1 className="text-4xl text-gray-600 dark:text-gray-300 font-bold">
                        {lexicon.word}
                    </h1>
                    <span>{phonetic?.text}</span>
                </div>
            </div>

            <ListOfMeanings meanings={lexicon.meanings} />
        </div>
    );
};

export default LexiconResult;
