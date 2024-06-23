import React, { ReactNode, createContext, useState } from "react";

const PodcastDataContext = createContext<any>(null);

interface PodcastDataContextProviderProps {
  children: ReactNode;
}
interface author {
  name: string;
  title: string;
}
interface podcastDetailProps {
  title: string;
  description: string;
  authors: Array<author>;
  publisher:string
  publicationDate: any;
  language: string;
}
const PodcastDataContextProvider: React.FC<PodcastDataContextProviderProps> = ({
  children,
}) => {
  const [authorFiles, setAuthorFiles] = useState<File[]>([]);
  const [audioFile, setAudioFile] = useState<File[]>([]);
  const [thumnailFile, setThumnailFile] = useState<File[]>([]);
  const [podcastDetail, setPodcastDetail] = useState<podcastDetailProps>({
    title: "",
    description: "",
    authors: [{ name: "", title: "" }],
    publisher: "",
    publicationDate: "",
    language: "Vietnamese",
  });
  
  return (
    <PodcastDataContext.Provider
      value={{
        authorFiles,
        setAuthorFiles,
        audioFile,
        setAudioFile,
        thumnailFile,
        setThumnailFile,
        podcastDetail,
        setPodcastDetail,
      }}
    >
      {children}
    </PodcastDataContext.Provider>
  );
};
export { PodcastDataContext, PodcastDataContextProvider };
