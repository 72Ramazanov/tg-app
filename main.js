import { Telegraf, Markup } from "telegraf"
import { message } from "telegraf/filters"

const token = '7647152460:AAEiyS2hFXiZj_Sv5y8399oEp8zLgFxfZBY'

const webAppUrl = 'https://tgangular-3b6d8.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение', 
        Markup.keyboard([
            Markup.button.webApp('Отправить сообщение', webAppUrl + '/feedback')
        ])
    )
})

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch()