import React, { useState} from 'react';

const Form = ({ setSearchLyrics}) => {
    // state of the search
    const [search, setSearch] = useState({
        artist: 'john lennon',
        song: 'imagine'
    });
    // stat of the error
    const [error, setError] = useState(false);

    // extract the values
    const { artist, song } = search;

    // assign the value in each input
    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }
    // to find information about song
    const handleSubmit = e => {
        e.preventDefault();          
        //validating
        if (artist.trim() === '' || song.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // All OK, send the values to principal component
        setSearchLyrics(search);


    };

    return ( 
        <div className="bg-info">
            { error ? <p className='alert alert-danger text-center p-2'>All step are required</p> : null}
            <div className="container">
                <div className="row">                    
                    <form
                        onSubmit={handleSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Search Lyrics</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist Name"
                                            onChange={handleChange}
                                            value={artist}
                                        />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song Name"
                                            onChange={handleChange}
                                            value={song}
                                        />
                                    </div>                                    
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                                >Search
                            </button>
                        </fieldset>
                        
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Form;