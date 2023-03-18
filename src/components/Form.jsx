// Form section in portfolio

function Form() {
    return <div>

        <form>

            <div>

                <div>
                    <label>Name:</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Email:</label>
                    <input type="email" />
                </div>

                <div>
                    <label>Message:</label>
                    <textarea rows="10" cols="40" />
                </div>

                <input type="submit" />
                
            </div>

        </form>
    </div>
}

export default Form