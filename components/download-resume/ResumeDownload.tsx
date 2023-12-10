// import React from 'react';
// import useDownloader from 'react-use-downloader';

// export default function App() {
//   const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();

//   const fileUrl = '/File.pdf';
//   const filename = 'File.pdf';

//   return (
//     <div className='App'>
//       <h3>GeeksforGeeks - File Downloader</h3>
//       <p>Download is in {isInProgress ? 'in progress' : 'stopped'}</p>

//       <button onClick={() => download(fileUrl, filename)}>Click to download the file</button>
//       <button onClick={() => cancel()}>Cancel the download</button>
//       <p>Download size in bytes {size}</p>

//       <label htmlFor='file'>Downloading progress:</label>
//       <progress id='file' value={percentage} max='100' />
//       <p>Elapsed time in seconds {elapsed}</p>
//       {error && <p>possible error {JSON.stringify(error)}</p>}
//     </div>
//   );
// }
