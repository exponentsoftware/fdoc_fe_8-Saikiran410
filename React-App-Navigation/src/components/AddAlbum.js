import React,{ Component } from 'react'
  
class AddAlbum extends Component{ 
  constructor(props){ 
    super(props) 
    this.state = { album_tilte:'', artist:'', album_cover:''} 
    this.handleChange = this.handleChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this) 
  } 
  
  handleSubmit(event){ 
    event.preventDefault() 
  } 
  
  handleChange(event){ 
    this.setState({ 
      [event.target.album_title] : event.target.value 
    }) 
  } 
  
  render(){ 
    return( 
      <form onSubmit={this.handleSubmit}> 
        <div> 
          <label htmlFor='album_title'>Album Title</label> :&nbsp;
          <input  
            name='album_title'
            placeholder='Enter Album Title' 
            value = {this.state.album_title} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <br />
        <div> 
          <label htmlFor='artist'>Artist</label> :&nbsp;
          <input 
            name='artist' 
            placeholder='Artist'
            value={this.state.artist} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <br /> 
        <div> 
        <label htmlFor='album_cover'>Album Cover</label> :&nbsp;
            <input 
              name='album_cover' 
              type='file'
              placeholder='Upload Album Cover'
              value={this.state.album_cover} 
              onChange={this.handleChange} 
            /> 
          </div> 
          <br />
          <div> 
            <button type='button'>Submit</button>  
        </div> 
      </form> 
    ) 
  } 
}  
export default AddAlbum;