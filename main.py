import markup
from aiogram.loggers import Bot, dispatcher, types, executor
from telebot.types import WebAppInfo

bot = Bot('7062153084:AAEjYExN7te3TUH-nA4jXeJxIqNsKNz7NRI')
dp = dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message, reply=None):
    markup = types.ReplyKeyboarMarkup()
    markup.add(types.keyboardButton('Open', wed_app=WebAppInfo)
    await message.answer('Hi', reply_markup=markup)