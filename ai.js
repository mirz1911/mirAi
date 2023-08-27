
const OpenAIApi = require("openai");
const Configuration = require('openai');
const {api} = require("./config.json");
const configuration = new Configuration({
    apiKey: api,
});
const openai = new OpenAIApi(configuration);
async function ask(prompt) {
    const response = await openai.chat.completions.create({          
        model: "gpt-3.5-turbo",
        messages: [
            {
                'role' : 'user',
            'content' : prompt,
            }
        ],
        temperature: 0,
    });
    console.log(response.choices);
    
    const answer = await response.choices[0].message.content;
    return answer;
}

module.exports = {
    ask,
};