const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dice")
    .setDescription(
      "Escolha o valor máximo do dado, e jogue para ver sua sorte!"
    )
    .addIntegerOption((option) =>
      option.setName("int").setDescription("Número máximo de dados")
    ),
  async execute(interaction) {
    const maxDice = interaction.options.getInteger("int");

    const result = () => {
      let min = Math.ceil(1);
      let max = Math.floor(maxDice);
      return Math.floor(Math.random() * (max - min)) + min;
    };

    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Resultado do dado")
      .setDescription(`Seu resultado foi ${result()}!`);

    await interaction.reply({ content: "Resultado:", embeds: [embed] });
  },
};
