from pynput.keyboard import key, Listener

html_file = open('probing.html','w')


listado=[]
validar=[]
cedula=''
cel=''

def index(key):

    var=str(format(key))
    if var=="u'E'":
        del listado[ : ]
        del validar[ : ]
    if var=="u'0'":
        listado.insert(10, '0')
        validar.insert(16, '0')
    if var=="u'1'":
        listado.insert(10, '1')
        validar.insert(17, '1')
    if var=="u'2'":
        listado.insert(10, '2')
        validar.insert(17, '2')
    if var=="u'3'":
        listado.insert(10, '3')
        validar.insert(17,  '3')
    if var=="u'4'":
        listado.insert(10, '4')
        validar.insert(17, '4')
    if var=="u'5'":
        listado.insert(10, '5')
        validar.insert(17, '5')
    if var=="u'6'":
        listado.insert(10, '6')
        validar.insert(17, '6')
    if var=="u'7'":
        listado.insert(10, '7')
        validar.insert(17, '7')
    if var=="u'8'":
        listado.insert(10, '8')
        validar.insert(17, '8')
    if var=="u'9'":
        listado.insert(10, '9')
        validar.insert(17, '9')
    if len(listado)==11:
        sep=''
        cedula= sep.join(listado)
        print(cedula)
        file=open("prueba.txt","w")
        file.write(cedula)

        file.close()
        cedula=' '
    #    del listado[ : ]
        return
    #if len(validar)==6:
        #sep=''
        #vali= sep.join(validar[11:17])
        #print(vali)


cel=index(listado)
print('aqui esta el listado')
print(cel)

with Listener(
    on_press=index) as listener:
    listener.join()
