import { MdOutlineVolumeOff, MdOutlineVolumeUp } from "react-icons/md";
import { useAudio, useUpdateEffect } from "react-use";

import { Lexicon } from "../../types";
import ListOfMeanings from "./MeaningListItem";

const LexiconResult = ({ lexicon }: { lexicon: Lexicon }) => {
    const [pronunciationAudio, pronunciationState, pronunciationControls] =
        useAudio({
            src: lexicon.phonetics[0].audio as string,
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
                        <MdOutlineVolumeUp />
                    ) : (
                        <MdOutlineVolumeOff />
                    )}
                </button>
                <div className="flex flex-col">
                    <h1 className="text-4xl text-gray-600 dark:text-gray-300 font-bold">
                        {lexicon.word}
                    </h1>
                    <span>{lexicon.phonetics[0].text}</span>
                </div>
            </div>

            <ListOfMeanings meanings={lexicon.meanings} />

            <p>Origin: {lexicon.origin}</p>
        </div>
    );
};

export default LexiconResult;
