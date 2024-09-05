//   const onChangeInput = (e, employeeId) => {
//     const { name, value } = e.target
//     console.log('name', name)
//     console.log('value', value)
//     console.log('employeeId', employeeId)

//     const editData = employeeData.map((item) =>
//       item.employeeId === employeeId && name ? { ...item, [name]: value } : item
//     )

//    <input
//      name="name"
//      value={name}
//      type="text"
//      onChange={(e) => onChangeInput(e, employeeId)}
//      placeholder="Type Name"
//    />;
