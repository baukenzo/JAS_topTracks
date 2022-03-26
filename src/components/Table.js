export function Table({tracks}) {
    console.log(tracks)
    return (
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td>Песня</td>
                    <td>Артист</td>
                    <td>Альбом</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {
                    tracks.map((track , index) => 
                        <tr key={index} >
                            <td><img className="trackImage" src={track.image[1]['#text']} alt="" /></td>
                            <td className="trackName" >{track.name}</td>
                            <td>{track.artist.name}</td>
                            <td>{track.name}</td>
                            <td style={{textAlign: 'center'}} ><a target="_blanc" href={track.artist.url}>Shazam</a></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}