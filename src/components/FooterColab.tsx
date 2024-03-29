export interface ColabAppType
{
      id: number
      title: string
      descrition?: string
      url: string
      urlphoto:string
}

interface AppProps {
    colabApp: ColabAppType
  }

export function FooterColab({ colabApp }: AppProps){
    return(
        <>
            <a href={colabApp.url} target="_blank">
                <img src={colabApp.urlphoto} alt={colabApp.descrition} title={colabApp.title}/> 
            </a>
        </>
    )
}