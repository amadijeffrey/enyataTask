import React from 'react'
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Image from '../../atoms/Image/Image';
import './Details.scss'


const Details = ({imageSrc, 
    title,
    designation,
    language,
    eyeColors,
    averageLifeSpan,
    gender,
    yearOfBirth,
    skinColor,
    height,
    director,
    producer,
    releaseDate,
    model,
    passengers,
    pilots,
    name
  }) => {

return (
    <div className='details'>
     <Image  imageSrc={imageSrc}/>
     <div>
       <Paragraph textProps={'black-48-700'}>{title || name}</Paragraph>
       {designation && <Paragraph textProps={'#434854-16-500'}>Designation: {designation}</Paragraph>}
      {language && <Paragraph textProps={'#434854-16-500'}>Language: {language}</Paragraph>}
      {eyeColors && <Paragraph textProps={'#434854-16-500'}>Eye Colors: {eyeColors}</Paragraph>}
      {averageLifeSpan && <Paragraph textProps={'#434854-16-500'}>Average Lifespan: {averageLifeSpan}</Paragraph>}
      {gender && <Paragraph textProps={'#434854-16-500'}>Gender: {gender}</Paragraph>}
      {yearOfBirth && <Paragraph textProps={'#434854-16-500'}>Year of Birth: {yearOfBirth}</Paragraph>}
      {skinColor && <Paragraph textProps={'#434854-16-500'}>Skin Color: {skinColor}</Paragraph>}
      {height && <Paragraph textProps={'#434854-16-500'}>Height: {height}</Paragraph>}
      {director && <Paragraph textProps={'#434854-16-500'}>Director: {director}</Paragraph>}
      {producer && <Paragraph textProps={'#434854-16-500'}>Producer: {producer}</Paragraph>}
      {releaseDate && <Paragraph textProps={'#434854-16-500'}>Release Date: {releaseDate}</Paragraph>}
      {model && <Paragraph textProps={'#434854-16-500'}>Model: {model}</Paragraph>}
      {passengers && <Paragraph textProps={'#434854-16-500'}>Passengers: {passengers}</Paragraph>}
      {pilots && <Paragraph textProps={'#434854-16-500'}>Pilots: {pilots}</Paragraph>}
     </div>
  </div>
)
}

export default Details