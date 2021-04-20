import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { GenresCard } from '../../theme';

const Genreses: React.FC<any> = (props) => {
  const { genresData } = useSelector((state: RootState) => {
    return {
      genresData: state.genres.genresData as any,
    }
  })

  const genresContents = genresData && genresData.data.genres.filter((d: any) => props.genre_ids.indexOf(d.id) !== -1 && d);

  return (
    <>
      {
        genresContents && genresContents.map((data: any, idx: number) => 
          <GenresCard key={idx}>{data.name}</GenresCard>
        )
      }
    </>
  )
}

export default Genreses;