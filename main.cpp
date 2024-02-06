#include<bits/stdc++.h>
#include<string>
#include<vector>
#include<sstream>
#include<fstream> // Added for file handling
using namespace std;

class UserInfo
{
public:
    string email, name;
    string num;
};

class PhoneBook
{
private:
    map<string, UserInfo> contact;

public:
    PhoneBook() {}

    void addContact()
    {
        string s, e;
        string phone;
        cout << "Enter contact name: ";
        cin.ignore();
        getline(cin, s);
        cout << "Enter phone number: ";
        getline(cin,phone);
        cin.ignore();
        cout << "Enter email address: ";
        cin >> e;
        UserInfo p;
        p.name = s;
        p.num = phone;
        p.email = e;
        contact[s] = p;
        cout << "Contact added successfully" << endl;
    }

    void editContact()
    {
        string n, mail;
        string number;
        cout << "Enter contact name to modify: ";
        cin >> n;
        if (contact.find(n) != contact.end())
        {
            cout << "Enter new phone number (press enter if you do not want to change): ";
            cin >> number;
            cin.ignore();
            cout << "Enter new email (press enter if you do not want to change): ";
            cin >> mail;

            if (!number.empty())
            {
                contact[n].num = number;
            }
            if (!mail.empty())
            {
                contact[n].email = mail;
            }
            cout << "Contact modified successfully." << endl;
        }
        else
        {
            cout << "Contact name not found." << endl;
        }
    }

    void deleteContact()
    {
        string str;
        cout << "Enter the contact you want to delete: ";
        cin >> str;
        if (contact.find(str) != contact.end())
        {
            contact.erase(str);
            cout << "The selected contact has been deleted successfully." << endl;
        }
        else
        {
            cout << "The selected contact has not been found." << endl;
        }
    }

    UserInfo getInfo(string name)
    {
        if (contact.find(name) != contact.end())
        {
            return contact[name];
        }
        else
        {
            cout << "Contact not found." << endl;
            return UserInfo(); // empty object will be returned
        }
    }

    void displayContacts()
    {
        cout << "All Contacts: " << endl;
        for (map<string, UserInfo>::iterator it = contact.begin(); it != contact.end(); ++it)
        {
            cout << it->first << ": " << it->second.num << ", " << it->second.email << endl;
        }
    }

    // Function to save contacts to a file
    void saveContactsToFile(const string &filename)
    {
        ofstream outFile(filename);
        if (outFile.is_open())
        {
            for (const auto &entry : contact)
            {
                outFile << entry.second.name << "," << entry.second.num << "," << entry.second.email << "\n";
            }
            outFile.close();
            cout << "Contacts saved to file successfully." << endl;
        }
        else
        {
            cout << "Unable to open the file for saving contacts." << endl;
        }
    }

    // Function to load contacts from a file
    void loadContactsFromFile(const string &filename)
    {
        ifstream inFile(filename);
        if (inFile.is_open())
        {
            contact.clear(); // Clear existing contacts before loading from file
            string line;
            while (getline(inFile, line))
            {
                istringstream iss(line);
                string name, num, email;
                getline(iss, name, ',');
                getline(iss, num, ',');
                getline(iss, email, ',');
                UserInfo p;
                p.name = name;
                p.num = num;
                p.email = email;
                contact[name] = p;
            }
            inFile.close();
            cout << "Contacts loaded from file successfully." << endl;
        }
        else
        {
            cout << "Unable to open the file for loading contacts." << endl;
        }
    }
};

int main()
{
    PhoneBook pb;
    int ch;
    string str;
    UserInfo u;

    // Load contacts from file at the start of the program
    pb.loadContactsFromFile("contacts.txt");

    do
    {
        cout << "\n1. Add Contact\n2. Edit Contact\n3. Delete Contact\n4. Get Contact Information\n5. List All Contacts\n6. Save Contacts to File\n7. Exit\nEnter your choice: " << endl;
        cin >> ch;
        switch (ch)
        {
        case 1:
            pb.addContact();
            break;
        case 2:
            pb.editContact();
            break;
        case 3:
            pb.deleteContact();
            break;
        case 4:
            cout << "Enter contact name to retrieve information: ";
            cin >> str;
            u = pb.getInfo(str);
            if (!u.name.empty())
                cout << "Contact Information: " << u.num << ", " << u.email << endl;
            else
                cout << "Contact not found." << endl;
            break;
        case 5:
            pb.displayContacts();
            break;
        case 6:
            pb.saveContactsToFile("contacts.txt");
            break;
        case 7:
            pb.saveContactsToFile("contacts.txt"); // Save contacts to file before exiting
            exit(0);
            break;
        default:
            cout << "Invalid choice! Press 1 to 7 to use the phone book." << endl;
        }
    } while (ch<=7);
}
