import styled from 'styled-components';

const VideoListDiv = styled.div`
      float: right;
      width: calc(40% - 4px);
      height: 90vh;
      margin-top: -42.2rem;
     
      .iframe{
            display: flex;
            width: 29rem;
            height: 9.5rem;       
            margin: 2rem;
            border: 1px solid #ccc;
            padding: .7rem;
      }
      .iframe iframe{
            width: 17rem;
            background-color: grey;
      }
      .side-content{
            margin-left: 2rem;
            border: none;
            padding: .4rem;
      }
      .side-content h3{
            font-size: 16px;
      }
      
`;

export { VideoListDiv };