import Workspace from "@/app/components/Workspace/Workspace"

export const metadata ={
    title: 'Main Page'
}

export default async function Page(){

    return(
      
            <div className={`Workspace col s12`}>
                <Workspace/>
            </div>

    )
}