import { MdOutlineVolumeOff, MdOutlineVolumeUp } from "react-icons/md";
import { useAudio, useUpdateEffect } from "react-use";

import { Lexicon } from "../../types";
import ListOfMeanings from "./ListOfLexicalEntries";

const LexiconResult = ({ lexicon }: { lexicon: Lexicon }) => {
    const phonetic = lexicon.lexicalEntries[0].entries[0].pronunciations.find(
        (pronunciation) => pronunciation.hasOwnProperty("audioFile")
    );

    const [pronunciationAudio, pronunciationState, pronunciationControls] =
        useAudio({
            src: phonetic?.audioFile ?? "",
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
                    <span>{phonetic?.phoneticSpelling}</span>
                </div>
            </div>

            <ListOfMeanings lexicalEntries={lexicon.lexicalEntries} />

            <p className="mt-4">
                <span className="font-mono italic">Origin:</span>{" "}
                {lexicon.lexicalEntries[0].entries[0].etymologies}
            </p>
        </div>
    );
};

export default LexiconResult;
