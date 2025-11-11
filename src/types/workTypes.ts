  export interface SermonInterface {
    id: string,
    titre: string,
    date: string,
    passage: string,
    couverture:string,
    resume: string,
    videoUrl?: string,
    audioUrl?: string,
    tags?: string[],
  }


export interface BookInterface {
    id: string,
    titre: string,
    couverture: string,
    description: string,
    lien?: string,
}

