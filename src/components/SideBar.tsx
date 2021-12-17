import { Button } from "./Button";




interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SidebarProps {
  buttonClickFunction : (arg0: number)=> void;
  genresList : GenreResponseProps[];
  selectedGenreId : number;

}


export function SideBar(props:SidebarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genresList.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.buttonClickFunction(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>

    </nav>
  )
}