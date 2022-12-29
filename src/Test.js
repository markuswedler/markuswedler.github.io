const Test = () => {
  return (
    <section className="test">
      <h1>Hello</h1>
      <table>
        <tr>
          <td>
            <marquee behavior="alternate" direction="left">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</marquee>
          </td>
        </tr>
      </table>
      <table>
        <thead>
          <td>Название</td>
          <td>Ингредиенты</td>
          <td>Время</td>
        </thead>
        <tr>
          <td>Салат Цезарь</td>
          <td>
            Листья салата<br/>
            Помидоры<br/>
            и тд<br/>
          </td>
          <td>15 мин.</td>
        </tr>
      </table>

      <hr />
      
      <div className="images">
        <img src="https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt="" />
        <img src="" alt="ненайденное изображение" />
      </div>

      <hr />

      <frameset cols="50%,50%">
        <frame src="https://markuswedler.github.io/" scrolling="no"/>
      </frameset>

      <hr />
      
      <form>
        <h3>Анкета</h3>
        <div>Фамилия: <input type="text"/></div>
        <div>Имя: <input type="text"/></div>
        <div>Отчество: <input type="text"/></div>
        <hr />
        <div>Ваш пол:</div>
        <div><input type="radio" name="gender" /> Мужчина</div>
        <div><input type="radio" name="gender" /> Женщина</div>
        <hr />
        <div>Семейное положение:</div>
        <div><input type="radio" name="gender" /> Женат/Замужем</div>
        <div><input type="radio" name="gender" /> Холост/Не замужем</div>
        <hr />
        <div>Место жительства:</div>
        <div>Страна: 
          <select name="" id="">
            <option value="Россия">Россия</option>
            <option value="Германия">Германия</option>
            <option value="Япония">Япония</option>
          </select>
        </div>
        <div>Город: <input type="text" /></div>
        <div>Индекс: <input type="number" /></div>
        <div>Город: <input type="text" /></div>
        <div>Улица: <input type="text" /></div>
        <div>Дом: <input type="num" /> Квартира: <input type="num" /></div>
        <hr />
        <div>Электронный адрес: <input type="email" /></div>
        <hr />
        <div>Ваши увлечения:</div>
        <div><input type="checkbox" name="hobbys" /> Компьютеры</div>
        <div><input type="checkbox" name="hobbys" /> Интернет</div>
        <div><input type="checkbox" name="hobbys" /> Спорт</div>
        <div><input type="checkbox" name="hobbys" /> Путегествия и туризм</div>
        <div><input type="checkbox" name="hobbys" /> Чтение книг</div>
        <div><input type="checkbox" name="hobbys" /> Другое <input type="text" /></div>
        <hr />
        <button>Подача запроса</button> <button>Сброс</button>
      </form>
    </section>
  )
}
 
export default Test