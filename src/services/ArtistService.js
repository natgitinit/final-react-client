const ArtistService = {
  fetchArtists: () => {
    debugger;
    return fetch('/artists')
      .then(response => response.json())
  }
}

export default ArtistService;


// .ajax({
//   url: this.props.url,
//   dataType: 'json',
//   success: function (data) {
//     this.setState({ data: data });
//   }
// })
