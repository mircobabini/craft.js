import { Editor, Frame, Element } from '@craftjs/core';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { NextSeo } from 'next-seo';
import React from 'react';

import { Viewport, RenderNode } from '../components/editor';
import { Container, Text } from '../components/selectors';
import { Button } from '../components/selectors/Button';
import { Custom1, OnlyButtons } from '../components/selectors/Custom1';
import { Custom2, Custom2VideoDrop } from '../components/selectors/Custom2';
import { Custom3, Custom3BtnDrop } from '../components/selectors/Custom3';
import { Video } from '../components/selectors/Video';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'acumin-pro',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="h-full h-screen">
        <NextSeo
          title="Craft.js"
          description="A React framework for building drag-n-drop page editors."
          canonical="https://craft.js.org/"
          twitter={{
            site: 'craft.js.org',
            cardType: 'summary_large_image',
          }}
        />
        <Editor
          resolver={{
            Container,
            Text,
            Custom1,
            Custom2,
            Custom2VideoDrop,
            Custom3,
            Custom3BtnDrop,
            OnlyButtons,
            Button,
            Video,
          }}
          enabled={false}
          onRender={RenderNode}
        >
          <Viewport>
            <Frame>
              <Element
                canvas
                is={Container}
                width="800px"
                height="auto"
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                padding={['40', '40', '40', '40']}
                custom={{ displayName: 'Pagina' }}
              >
                <Element
                  canvas
                  is={Container}
                  flexDirection="row"
                  width="100%"
                  height="120px"
                  background={{ r: 230, g: 230, b: 230, a: 1 }}
                  padding={['0', '0', '0', '0']}
                  custom={{ displayName: 'Blocco' }}
                >
                  <Text
                    color={{
                      r: '0',
                      g: '0',
                      b: '0',
                      a: '1',
                    }}
                    textAlign='center'
                    margin={['20', '20', '20', '20']}
                    fontSize="20"
                    text="Trascina i blocchi che vuoi inserire"
                  ></Text>
                </Element>
              </Element>
            </Frame>
          </Viewport>
        </Editor>
      </div>
    </ThemeProvider>
  );
}

export default App;
