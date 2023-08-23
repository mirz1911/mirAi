
const OpenAIApi = require("openai");
const Configuration = require('openai');
const {api} = require("./config.json");
const configuration = new Configuration({
    apiKey: api,
});
const openai = new OpenAIApi(configuration);
async function ask(prompt) {
    const response = openai.chat.completions.create({      
        messages: [{
            role: 'user',
            content: prompt,
            maxTokens: 400
        }],
        model: "gpt-3.5-turbo",
    });
    const answe = response.choices;
    const answer = toString(answe)
    console.log(response.choices);
    return answer;
}
module.exports = {
    ask,
};