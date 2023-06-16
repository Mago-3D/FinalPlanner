import { createSlice } from "@reduxjs/toolkit";
import openai from '../../image/openai.jpg';
import baby from '../../image/baby.jpg'
import bucket from '../../image/bucket.jpg'
import car from '../../image/car.jpg'
import celebrity from '../../image/celebrity.jpg'
import cocktail from '../../image/cocktail.jpg'
import fact from '../../image/fact.jpg'
import hobby from '../../image/hobby.jpg'
import marvel from '../../image/marvel.jpg'
import starwar from '../../image/starwar.jpg'

export const data = createSlice({
  name: "data",
  initialState: {
    apiKey: {headers: {'x-api-key': '2H4Gh5iKCfl/XoUNXINiSA==pVIAYs7H1FWmchcm'}},
    application: [
          {
            image: baby,
            title: "Your future baby name",
            path: 'baby',
          },
          {
            image: bucket,
            title: "Bucket list (what you should do in your life)",
            path: 'bucket',
          },
          {
              image: celebrity,
              title: "Which celebrity are you in parallel universe?",
              path: 'celebrity',
          },
          {
              image: fact,
              title: "Facts you should know",
              path: 'facts',
          },
          {
              image: hobby,
              title: "Find your hobby",
              path: 'hobby',
          },
          {
              image: marvel,
              title: "Marvel",
              path: 'marvel',
          },
          {
              image: starwar,
              title: "Star wars",
              path: 'starwars',
          },
          {
              image: openai,
              title: "OpenAI",
              path: 'openai',
          },
        ]
  },

  reducers: {
    save: (state, action) => {
      state.application = action.payload;
    },
  },
});

export const { save } = data.actions;

export default data.reducer;
