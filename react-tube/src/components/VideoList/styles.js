import styled from 'styled-components';

const VideoListDiv = styled.div`
      float: right;
      width: calc(40% - 4px);
      min-height: 90vh;
      margin-top: -42.2rem;
      margin-left: -5rem;
     
      .iframe{
            display: flex;
            width: 29rem;
                   
            margin: 1rem;
            margin-left: -1rem;
            border: 1px solid #ccc;
            padding: .7rem;
      }
      .iframe iframe{
            width: 14rem;
            background-color: grey;
      }
      .side-content{
            margin-left: .6rem;
            border: none;
            padding: .2rem;
            min-height: 9.5rem; 
      }
      .side-content h3{
            font-size: 14px;
      }
      
`;

export { VideoListDiv };