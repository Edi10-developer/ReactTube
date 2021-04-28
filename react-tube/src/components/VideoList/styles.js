import styled from 'styled-components';

const VideoListDiv = styled.div`
      float: right;
      width: calc(40% - 4px);
      height: 90vh;
      margin-top: -27.6rem;
     
      .iframe{
            display: flex;
            width: 29rem;
            height: 9.5rem;       
            margin: 2rem;
            border: 1px solid #ccc;
            padding: .7rem;
      }
      .iframe iframe{
            width: 16rem;
            background-color: grey;
      }
      .iframe div{
            margin-left: 2rem;
            border: none;
      }
`;

export { VideoListDiv };